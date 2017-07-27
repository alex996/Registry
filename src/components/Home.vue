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
          <div class="columns is-multiline">
            <div class="column is-8">
              <div class="panel">
                <div class="panel-heading">
                  New Person Entry
                </div>
                <div class="panel-block">
                  <form @submit.prevent="addPerson">
                    <div class="columns">
                      <div class="column is-3">
                        <div class="field">
                          <label class="label">First Name</label>
                          <div class="control">
                            <input class="input" placeholder="First Name" v-model="newPerson.firstName" required>
                          </div>
                        </div>
                      </div>
                      <div class="column is-3">
                        <div class="field">
                          <label class="label">Last Name</label>
                          <div class="control">
                            <input class="input" placeholder="Last Name" v-model="newPerson.lastName" required>
                          </div>
                        </div>
                      </div>
                      <div class="column is-1">
                        <div class="field">
                          <label class="label">Age</label>
                          <div class="control">
                            <input class="input" placeholder="First Name" v-model="newPerson.age" type="number" required>
                          </div>
                        </div>
                      </div>
                      <div class="column is-2">
                        <div class="field">
                          <label class="label">City</label>
                          <div class="control">
                            <input class="input" placeholder="City" v-model="newPerson.city" required>
                          </div>
                        </div>
                      </div>
                      <div class="column is-2">
                        <div class="field">
                          <label class="label">Income</label>
                          <div class="control">
                            <input class="input" placeholder="First Name" v-model="newPerson.income" type="number" required>
                          </div>
                        </div>
                      </div>
                      <div class="column is-1 has-mt-auto">
                        <button type="submit" class="button is-primary">Add</button>
                      </div>
                    </div>              
                  </form>
                </div>
              </div>
            </div>
            <div class="column is-8">
              <div class="panel">
                <div class="panel-heading">
                  Person Records
                </div>
                <div class="panel-block">
                  <table class="table is-bordered">
                    <thead>
                      <tr>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Age</th>
                        <th>City</th>
                        <th>Income</th>
                        <th></th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr v-for="person in persons">
                        <td>{{ person.firstName }}</td>
                        <td>{{ person.lastName }}</td>
                        <td>{{ person.age }}</td>
                        <td>{{ person.city }}</td>
                        <td>{{ person.income }}</td>
                        <td>
                          <button class="button is-small is-info">
                            <span class="icon is-small">
                              <i class="fa fa-pencil" aria-hidden="true"></i>
                            </span>
                          </button>
                          <button class="button is-small is-danger" @click="removePerson(person)">
                            <span class="icon is-small">
                              <i class="fa fa-trash-o" aria-hidden="true"></i>
                            </span>
                          </button>
                        </td>
                      </tr>
                      <tr v-show="! persons.length">
                        <td colspan="6">
                          <i>There's nothing here...</i>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>               
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
    persons: db.ref('persons')
  },
  data() {
    return {
      newPerson: {
        firstName: '',
        lastName: '',
        age: 0,
        city: '',
        income: 0
      }
    }
  },
  methods: {
    addPerson() {
      db.ref('persons').push(this.newPerson)
      this.newPerson = {
        firstName: '',
        lastName: '',
        age: 0,
        city: '',
        income: 0
      }
    },
    removePerson(person) {
      db.ref('persons').child(person['.key']).remove()
    }
  }
}
</script>

<style lang="scss" scoped>
  .has-mt-auto {
    margin-top: auto;
  }
</style>
