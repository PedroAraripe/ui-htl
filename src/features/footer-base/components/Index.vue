<template>
  <footer>
    <v-container>
      <div class="w-lg-50 mx-auto flex my-5 mt-lg-10 mb-lg-15">
        <v-row>
          <v-col
            v-for="(column, i) in columns"
            :key="column.title"
            lg="6"
            cols="12"
          >
            <section
              :class="{
                'ml-lg-15' : i
              }"
            >
              <h3 class="font-medium text-sm-subtitle-2">
                {{ column.title }}
              </h3>

              <ul
                v-for="row in column.rows"
                :key="row.title"
              >
                <h4 class="mt-2 text-sm-body-2">
                  {{ row.title }}
                </h4>
              </ul>
            </section>
          </v-col>
        </v-row>
      </div>
    </v-container>
  </footer>
</template>

<script lang="ts" setup>
const columns = [
  {
    title: "Atendimento",
    rows: [
      {
        title: "Central de Ajuda"
      },
      {
        title: "LucasCover"
      },
      {
        title: "Antidiscriminação"
      },
      {
        title: "Apoio à pessoa com deficiência"
      },
      {
        title: "Opções de cancelamento"
      },
      {
        title: "Reporte um problema no bairro"
      },
    ]
  },
  {
    title: "Hospedagem",
    rows: [
      {
        title: "Anuncie seu espaço no Airbnb"
      },
      {
        title: "LucasCover para anfitriões"
      },
      {
        title: "Recursos para anfitriões"
      },
      {
        title: "Fórum da comunidade"
      },
      {
        title: "Hospedagem responsável"
      },
      {
        title: "Participe de uma aula gratuita de hospedagem"
      },
    ]
  },
]
</script>
