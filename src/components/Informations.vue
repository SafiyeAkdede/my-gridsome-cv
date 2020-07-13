<template>
  <section class="resume-section middle" id="informations">
    <div class="w-100">
      <h1 class="mb-5">Informations</h1>

      <div class="inline-block">
        <div class="social-icons contact-icons">
          <li title="Motorisation" class="icons">
            <font-awesome :icon="['fa', 'car']" />
          </li>
        </div>
        <div>Permis B et véhicule personnel</div>
      </div>
      <div class="inline-block">
        <div class="social-icons contact-icons">
          <li title="Ma date d'anniversaire" class="icons">
            <font-awesome :icon="['fa', 'birthday-cake']" />
          </li>
        </div>
        <div>Née le 17 Juin 1998</div>
      </div>
      <div class="inline-block">
        <div class="social-icons contact-icons">
          <li title="Ma location" class="icons">
            <font-awesome :icon="['fa', 'map-marker-alt']" />
          </li>
        </div>
        <div>Liège, Belgique</div>
      </div>
      <div class="inline-block">
        <div class="social-icons contact-icons">
          <li title="Mon cv en pdf" class="icons">
            <font-awesome :icon="['fa', 'file-pdf']" />
          </li>
        </div>
        <div>Mon cv</div>
      </div>
    </div>
  </section>
</template>

<style scoped lang="scss">
.contact-icons {
  margin: 3px;
}

.inline-block {
  display: flex;
  align-items: center;
}
</style>