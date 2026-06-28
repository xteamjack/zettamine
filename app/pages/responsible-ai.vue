<script setup lang="ts">
import { legalDocs } from '~/data/legal'
const doc = legalDocs['responsible-ai']!
useHead({ title: `${doc.title} · ZettaMine` })
</script>

<template>
  <LegalDoc :doc="doc" />
</template>
