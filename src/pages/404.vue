<template>
  <Layout>
    <section class="resume-section">
      <h1 class="mb-5 text-danger">
        <div class="float-left"><font-awesome :icon="['fa', 'exclamation-triangle']"/></div>
        Oups ! Erreur 404
      </h1>
      <p class="subheading mb-3">Je pense que vous vous êtes perdus!</p>
      <p class="subheading mb-3">Il n'y a rien à voir par ici!</p>
        <g-link class="btn btn-outline-success" to="/">
          Revenir à la page accueil
        </g-link>
    </section>
  </Layout>
</template>

<script>
  export default {
    metaInfo: {
      title: "Erreur 404"
    }
  }
</script>