<template>
  <div></div>
</template>

<script>
// This component is loaded when user selects menu option to login using BCeID.
export default {
  asyncData ({ $config, redirect }) {
    // redirect to Auth to sign in and then return to dashboard
    const redirectURL = $config.authURL + 'signin/bceid/' +
      encodeURIComponent($config.baseURL + 'dashboard')
    redirect(redirectURL)
  },
}
</script>
