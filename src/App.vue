<template>
  <div>
    <md-toolbar class="md-primary">
      <h1 class="md-title">Calculate CircleCI Performance Pricing Plan Price</h1>
    </md-toolbar>

    <md-content>
      <div class="container">
        <div>
          <p>
            <strong>This is Unofficial!</strong>
          </p>
          <p>
            EN: This page calculates price of CircleCI's Performance Pricing Plan if you use.
            <br>Enter your how many team members and how many mininutes you are using CircleCI.
            <br>See also
            <a href="https://www.npmjs.com/package/@mstssk/ppp">npm package</a> and
            <a href="https://github.com/mstssk/calc-circleci-ppp">GitHub</a>.
          </p>
          <p>
            JA: このページはCircleCIのPerformance Pricing Planの金額を計算します。
            <br>あなたのチームメンバーとCircleCIの利用時間(分)を入力してください。
            <br>
            <a href="https://www.npmjs.com/package/@mstssk/ppp">npmパッケージ</a>と
            <a href="https://github.com/mstssk/calc-circleci-ppp">GitHub</a>でも公開しています。
          </p>
          <p>
            <a href="https://badge.fury.io/js/%40mstssk%2Fppp">
              <img src="https://badge.fury.io/js/%40mstssk%2Fppp.svg" alt="npm version" height="18">
            </a>
          </p>
        </div>

        <md-list>
          <md-divider></md-divider>

          <md-subheader>Active Members</md-subheader>
          <md-list-item>
            <md-field>
              <label>How many Active Members(Minium 5 members)</label>
              <md-input v-model="members" type="number" min="5"></md-input>
              <span class="md-suffix">members</span>
            </md-field>
          </md-list-item>

          <md-divider></md-divider>

          <md-subheader>Resource Classes and Mininutes</md-subheader>

          <md-list-item v-for="item in minAndResClasses" :key="item.id">
            <div class="md-layout md-gutter">
              <md-button
                class="md-accent md-icon-button"
                @click="deleteItem(item.id)"
                style="margin-top:1em"
              >
                <md-icon>remove_circle_outline</md-icon>
                <md-tooltip md-direction="top">Delete</md-tooltip>
              </md-button>
              <div class="md-layout md-gutter">
                <div class="md-layout-item">
                  <md-field>
                    <label>
                      Resouce class(
                      <i>medium</i> is default.)
                    </label>
                    <md-select v-model="item.resClass" name="newClass">
                      <md-option v-for="item of ResourceClasses" :key="item" :value="item">{{item}}</md-option>
                    </md-select>
                  </md-field>
                </div>
                <div class="md-layout-item">
                  <md-field>
                    <label>Mininutes</label>
                    <md-input v-model="item.min" type="number" min="0"></md-input>
                    <span class="md-suffix">min</span>
                  </md-field>
                </div>
              </div>
            </div>
          </md-list-item>

          <md-list-item>
            <div class="md-layout md-gutter">
              <md-button class="md-primary md-icon-button" @click="addItem">
                <md-icon>add_circle_outline</md-icon>
                <md-tooltip md-direction="top">Add</md-tooltip>
              </md-button>
            </div>
          </md-list-item>

          <md-divider></md-divider>

          <md-subheader>Price</md-subheader>
          <md-list-item>
            <p>$ {{price}} (US dollars)</p>
          </md-list-item>
        </md-list>
      </div>
    </md-content>
  </div>
</template>

<script>
import calcSum from "@mstssk/ppp";

const ResourceClasses = [
  "small",
  "medium", // default
  "medium+",
  "large",
  "xlarge",
  "macos-large"
];

export default {
  name: "app",
  components: {},
  data: () => ({
    ResourceClasses,
    members: 5,
    minAndResClasses: [{ id: 0, resClass: "medium", min: 2500 }]
  }),
  computed: {
    price() {
      return calcSum(
        this.members,
        ...this.minAndResClasses.filter(i => i.resClass && i.min)
      );
    }
  },
  methods: {
    deleteItem(id) {
      // パフォーマンス良くないが、そんなに要素扱わないしええやろ
      this.minAndResClasses = this.minAndResClasses.filter(
        item => item.id !== id
      );
    },
    addItem() {
      this.minAndResClasses.push({
        id: Date.now(),
        resClass: "medium",
        min: 0
      });
    }
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.container {
  padding: 1em;
}
</style>
