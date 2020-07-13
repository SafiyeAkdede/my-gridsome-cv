<template>
  <section class="resume-section" id="skills">
    <div class="w-100">
      <h1 class="mb-5">Compétences techniques</h1>
      <b-tabs fill>
        <b-tab title="Languages de programmation">
          <br>
          <ul class="list-inline dev-icons">
            <li title="Html 5" class="icons list-inline-item">
              <font-awesome :icon="['fab', 'html5']" />
            </li>
            <li title="CSS" class="icons list-inline-item">
              <font-awesome :icon="['fab', 'css3-alt']" />
            </li>
            <li title="SASS" class="icons list-inline-item">
              <font-awesome :icon="['fab', 'sass']" />
            </li>
            <li title="Javascript" class="icons list-inline-item">
              <font-awesome :icon="['fab', 'js-square']" />
            </li>
            <li title="PHP" class="icons list-inline-item">
              <font-awesome :icon="['fab', 'php']" />
            </li>
            <li title="React.js" class="icons list-inline-item">
              <font-awesome :icon="['fab', 'react']" />
            </li>
            <li title="Vue.js" class="icons list-inline-item">
              <font-awesome :icon="['fab', 'vuejs']" />
            </li>
            <li title="Node.js" class="icons list-inline-item">
              <font-awesome :icon="['fab', 'node-js']" />
            </li>
            <li title="Bootstrap" class="icons list-inline-item">
              <font-awesome :icon="['fab', 'bootstrap']" />
            </li>
          </ul>
          <ul>
            <li>Html</li>
            <li>Css</li>
            <li>Sass</li>
            <li>Javascript</li>
            <li>Php</li>
            <li>React.js</li>
            <li>Vue.js</li>
            <li>Node.js</li>
            <li>Bootstrap</li>
          </ul>
        </b-tab>
        <b-tab title="Applications et autres">
          <br>
          <ul class="list-inline dev-icons">
            <li title="Git" class="icons list-inline-item">
              <font-awesome :icon="['fab', 'git']" />
            </li>
            <li title="Github" class="icons list-inline-item">
              <font-awesome :icon="['fab', 'github']" />
            </li>
            <li title="Microsoft" class="icons list-inline-item">
              <font-awesome :icon="['fab', 'microsoft']" />
            </li>
            <li title="Npm" class="icons list-inline-item">
              <font-awesome :icon="['fab', 'npm']" />
            </li>
            <li title="Figma" class="icons list-inline-item">
              <font-awesome :icon="['fab', 'figma']" />
            </li>
            <li title="Terminal" class="icons list-inline-item">
              <font-awesome :icon="['fas', 'terminal']" />
            </li>
          </ul>
          <ul>
            <li>Git</li>
            <li>GitHub</li>
            <li>Microsoft office suite (Excel, Word, Access, PowerPoint</li>
            <li>Npm</li>
            <li>Figma</li>
            <li>Terminal</li>
            <li>Visual Studio Code</li>
          </ul>
        </b-tab>
      </b-tabs>
    </div>
  </section>
</template>

<style lang="scss">
.icons {
  display: inline-block;
  height: 3.5rem;
  width: 3.5rem;
  background-color: #4BA846;
  color: white !important;
  border-radius: 100%;
  text-align: center;
  font-size: 2.5rem;
  line-height: 3.5rem;
  margin-right: 0.5rem;
}
</style>