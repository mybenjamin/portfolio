<template>
  <nav>
    <ul class="flex gap-4 p-2 bg-gray-700 text-white">
      <li>
        <NuxtLink to="/">Home</NuxtLink>
      </li>
      <li>
        <NuxtLink to="/about">About</NuxtLink>
      </li>
    </ul>
  </nav>
  <div>
    <NuxtPage />
  </div>
</template>
