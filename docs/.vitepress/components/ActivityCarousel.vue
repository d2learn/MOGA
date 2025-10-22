<template>
  <div class="carousel-wrapper">
    <h1 class="carousel-title">{{ title }}</h1>
    <div class="carousel-container">
      <div
        class="carousel"
        :style="{ transform: `translateX(-${currentIndex * 100}%)` }"
      >
        <div
          class="card"
          v-for="(activity, index) in activities"
          :key="index"
          :style="getCardStyle(index)"
          @mouseenter="pauseCarousel"
          @mouseleave="resumeCarousel"
        >
          <h3 class="card-title">
            <a :href="resolveLink(activity.link)" class="card-link">
              {{ activity.title }}
            </a>
          </h3>
          <p class="card-description">{{ activity.description }}</p>

          <ul class="info-list">
            <li><strong>价格:</strong> {{ activity.price }}</li>
            <li>
              <strong>开发者:</strong>
              <a :href="resolveLink(activity.developerLink)" target="_blank">{{ activity.developer }}</a>
            </li>
            <li>
              <strong>发行商:</strong>
              <a :href="resolveLink(activity.publisherLink)" target="_blank">{{ activity.publisher }}</a>
            </li>
            <li><strong>发行时间:</strong> {{ activity.releaseDate }}</li>
            <li><strong>游戏体量:</strong> {{ activity.duration }}</li>
            <li><strong>标签:</strong>
              <span class="tag" v-for="(tag, i) in activity.tags" :key="i">{{ tag }}</span>
            </li>
          </ul>

          <div class="link-button">
            <a :href="resolveLink(activity.link)">👉 游戏详情页</a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount, watch } from 'vue'

const props = defineProps({
  title: {
    type: String,
    default: '🎮 精选活动'
  },
  activities: {
    type: Array,
    default: () => []
  },
  interval: {
    type: Number,
    default: 5000
  }
})

const currentIndex = ref(0)
let timer = null

const startCarousel = () => {
  if (timer) clearInterval(timer)
  timer = setInterval(() => {
    currentIndex.value = (currentIndex.value + 1) % props.activities.length
  }, props.interval)
}

const pauseCarousel = () => {
  if (timer) clearInterval(timer)
}

const resumeCarousel = () => {
  if (props.activities.length > 1) startCarousel()
}

onMounted(() => {
  if (props.activities.length > 1) {
    startCarousel()
  }
})

onBeforeUnmount(() => {
  if (timer) clearInterval(timer)
})

watch(() => props.interval, startCarousel)

// 🎨 随机背景生成逻辑
const cardBackgrounds = props.activities.map(() => {
  const h = Math.floor(Math.random() * 360)
  return `hsla(${h}, 70%, 60%, 0.25)`
})

const getCardStyle = (index) => ({
  background: `linear-gradient(135deg, ${cardBackgrounds[index]}, rgba(255,255,255,0.05))`,
  backdropFilter: 'blur(10px)'
})

// 🌐 链接处理（自动加 base）
const base = import.meta.env.BASE_URL || '/'

const resolveLink = (url) => {
  if (/^https?:\/\//.test(url)) return url
  return base.replace(/\/$/, '') + '/' + url.replace(/^\//, '')
}
</script>

<style scoped>
.carousel-wrapper {
  max-width: 960px;
  margin: 3rem auto;
  padding: 1rem;
}

.carousel-title {
  text-align: center;
  font-size: 2rem;
  font-weight: bold;
  margin-bottom: 2rem;
  color: var(--vp-c-text-1);
}

.carousel-container {
  position: relative;
  overflow: hidden;
  border-radius: 1rem;
}

.carousel {
  display: flex;
  transition: transform 0.6s ease-in-out;
}

.card {
  flex: 0 0 100%;
  padding: 2rem;
  border-radius: 1rem;
  box-shadow: 0 8px 30px rgba(0, 0, 0, 0.12);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  margin: 0 1rem;
  color: var(--vp-c-text-1);
}

.card:hover {
  transform: scale(1.02);
  box-shadow: 0 12px 40px rgba(0, 0, 0, 0.2);
}

.card-title {
  font-size: 1.25rem;
  font-weight: bold;
  margin-bottom: 1rem;
}

.card-link {
  color: #2563eb;
  text-decoration: none;
}

.card-link:hover {
  text-decoration: underline;
}

.card-description {
  font-size: 0.95rem;
  color: var(--vp-c-text-2);
  margin-bottom: 1rem;
  line-height: 1.6;
}

.info-list {
  list-style: none;
  padding: 0;
  margin: 0 0 1rem 0;
  font-size: 0.9rem;
  color: var(--vp-c-text-2);
}

.info-list li {
  margin: 0.35rem 0;
}

.tag {
  display: inline-block;
  background-color: rgba(37, 99, 235, 0.1);
  color: #2563eb;
  padding: 0.2rem 0.5rem;
  border-radius: 0.375rem;
  font-size: 0.75rem;
  margin-right: 0.4rem;
  margin-top: 0.2rem;
}

.link-button {
  margin-top: 1.5rem;
  text-align: right;
}

.link-button a {
  color: #1e40af;
  font-weight: 600;
  text-decoration: none;
}

.link-button a:hover {
  text-decoration: underline;
}

/* 暗色模式适配 */
:root.dark .card {
  color: #e5e7eb;
}

:root.dark .card-description,
:root.dark .info-list {
  color: #d1d5db;
}

:root.dark .tag {
  background-color: rgba(147, 197, 253, 0.12);
  color: #93c5fd;
}
</style>