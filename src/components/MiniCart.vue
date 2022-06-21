<template>
  <div>
    <badge-button :badgeamount="amount" onclick="location.href='cart'">🛒 Cart</badge-button>
  </div>
</template>

<script>
// Import unnecessary but need to change vue config
import { BadgeButton } from '@cgi/styleguide';

export default {
    Name: 'MiniCart',
    props: {
        amount: Number
    },
    components: {
        // Unnecessary to define component but avoids warning
        BadgeButton
    }
}
</script>

<style>

</style>