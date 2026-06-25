<script setup lang="ts">
import { legalDocs } from '~/data/legal'
const doc = legalDocs.terms!
useHead({ title: `${doc.title} — Zettamine` })
</script>

<template>
  <LegalDoc :doc="doc" />
</template>
