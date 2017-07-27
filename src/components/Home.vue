<template>
  <section class="hero">
    <div class="hero-body">
      <div class="container">
        <h1 class="title is-spaced">
          Registry
        </h1>
        <h2 class="subtitle">
          Keeping record of the US census since the dawn of time.
        </h2>
        <div class="container">
          <div class="columns">
            <div class="column is-8">
              <table class="table is-bordered">
                <thead>
                  <tr>
                    <th>First Name</th>
                    <th>Last Name</th>
                    <th>Age</th>
                    <th>City</th>
                    <th>Income</th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="individual in individuals">
                    <td>{{ individual.firstName }}</td>
                    <td>{{ individual.lastName }}</td>
                    <td>{{ individual.age }}</td>
                    <td>{{ individual.city }}</td>
                    <td>{{ individual.income }}</td>
                  </tr>
                  <tr v-show="! individuals.length">
                    <td colspan="5">
                      There's nothing here...
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>          
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import db from '../db'

export default {
  name: 'home',
  firebase: {
    individuals: db.ref('individuals')
  }
}
</script>

<style lang="scss" scoped>

</style>
