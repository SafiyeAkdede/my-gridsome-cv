<template>
  <nav id="sideNav" class="list-group shift">
    <div v-on:click.prevent="$scrollTo('#about')" class="navbar-brand">
      <span class="d-none d-md-block">
        <g-image
          alt="My picture"
          src="../assets/images/profile.jpg"
          class="img-fluid img-profile rounded-circle mx-auto mb-2"
        />
      </span>
    </div>
    <div class="collapse navbar-collapse" id="mysidebar ">
      <ul class="navbar-nav">
        <li class="nav-item">
          <a class="nav-link" v-on:click.prevent="$scrollTo('#about')">Profile</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" v-on:click.prevent="$scrollTo('#contact')">Contact</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" v-on:click.prevent="$scrollTo('#informations')">Informations</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" v-on:click.prevent="$scrollTo('#experiences')">Experiences</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" v-on:click.prevent="$scrollTo('#studies')">Formations</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" v-on:click.prevent="$scrollTo('#skills')">Compétences</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" v-on:click.prevent="$scrollTo('#langue')">Langues</a>
        </li>
      </ul>
    </div>
  </nav>
</template>