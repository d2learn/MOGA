package = {

    homepage = "https://moga.d2learn.org",

    -- base info
    name = "moga-helper",
    description = [[ moga helper tool script ]],

    authors = "d2learn",
    licenses = "Apache-2.0",
    repo = "https://github.com/d2learn/moga",

    -- xim pkg info
    type = "script", 
    status = "stable",

    -- xvm: xlings version management
    xvm_enable = true,

    xpm = {
        linux = {
            ["latest"] = { ref = "0.0.1" },
            ["0.0.1"] = { },
        },
    },
}

import("xim.libxpkg.log")
import("xim.libxpkg.system")
import("xim.libxpkg.pkgmanager")

function moga_build()
    local config_mts_file = path.join(system.rundir(), "docs", ".vitepress", "config.mts")

    if not os.isfile(config_mts_file) then
        log.error("config.mts file not file" .. config_mts_file)
    end

    local config_mts_content = io.readfile(config_mts_file)
    local new_config_mts_content = config_mts_content:replace([['/MOGA/']], [['/']])

    log.info("1 - change website base config (moga -> /) in config.mts...")
    io.writefile(config_mts_file, new_config_mts_content)

    log.info("2 - run  [ ${cyan}pnpm run docs:build${clear} ]")
    system.exec("pnpm run docs:build")

    log.info("3 - restore config.mts")
    io.writefile(config_mts_file, config_mts_content)

    log.info("${yellow bright}moga build | ${green}%s - ok", path.join(path.directory(config_mts_file), "dist"))

end

-- TODO: add nginx and certbot to xpkg
function moga_deploy()

    local moga_d2learn_org_config = io.readfile(path.join(os.scriptdir(), "moga.d2learn.org"))
    local website_rootdir = path.join(system.rundir(), "docs", ".vitepress", "dist")
    local nginx_etc_dir = "/etc/nginx"
    local nginx_moga_sites_available = path.join(nginx_etc_dir, "sites-available", "moga.d2learn.org")
    local nginx_moga_sites_enabled = path.join(nginx_etc_dir, "sites-enabled")

    moga_d2learn_org_config = moga_d2learn_org_config:replace("moga_distdir_placeholder", website_rootdir, { plain = true })

    if not os.isdir(nginx_etc_dir) then
        log.error("not found /etc/nginx (current only support linux")
        return
    end

    log.info("1 - create config file - moga.d2learn.org")
    io.writefile("moga.d2learn.org", moga_d2learn_org_config)
    system.exec("sudo mv moga.d2learn.org " .. nginx_moga_sites_available)

    if not os.isfile(nginx_moga_sites_available) then
        log.error("create nginx moga.d2learn.org failed...")
        return
    end

    if not os.isfile(path.join(nginx_moga_sites_enabled, "moga.d2learn.org")) then
        system.exec(string.format("sudo ln -s %s %s", nginx_moga_sites_available, nginx_moga_sites_enabled))
    else
        log.warn("file already exist [%s] - skip", path.join(nginx_moga_sites_enabled, "moga.d2learn.org"))
    end

    log.info("2 - set auto-update ssl by certbot")
    system.exec("sudo certbot --nginx -d moga.d2learn.org"
        .. " --agree-tos --reinstall" -- auto-confirm
    )

    log.info("3 - restart nginx")
    system.exec("sudo nginx -t")
    system.exec("sudo systemctl restart nginx")


    log.info("4 - config git-autosync...")
    pkgmanager.install("git-autosync")
    system.exec([[git-autosync add . --time "* * * 3 30" --post-command "d2x build" ]])

    log.warn("${yellow bright} moga deploy | ${green}%s - ok", nginx_moga_sites_available)
end

function xpkg_main(action) 
    log.info("enter moga helper script...")
    if action == "build" then
        moga_build()
    elseif action == "deploy" then
        moga_deploy()
    else
        log.error("action [%s] not found...", tostring(action))
    end
end