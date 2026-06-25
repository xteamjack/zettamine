<script setup lang="ts">
import { legalDocs } from '~/data/legal'
const doc = legalDocs.cookies!
useHead({ title: `${doc.title} — Zettamine` })
</script>

<template>
  <LegalDoc :doc="doc" />
</template>
