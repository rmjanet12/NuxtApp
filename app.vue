<template>
  <NuxtLayout>
     
            <template #error="{ error }">
                <p>An error occurred: {{ error }}</p>
            </template>

           
            <NuxtPage />
     
    </NuxtLayout>
  
</template>
