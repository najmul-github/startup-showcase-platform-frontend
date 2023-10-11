<template>
  <PushNotificationService></PushNotificationService>
</template>

<script>
import PushNotificationService from '../components/push-notification/index'

export default {
    data(){
        return {
            role:"",
        }
    },
    components:{ PushNotificationService },
}
</script>
