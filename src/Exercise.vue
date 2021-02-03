<template>
  <div>
    <div v-bind:title="message">鼠标悬停几秒钟查看此处动态绑定的提示信息！</div>
    message:
    <div>{{ message }}</div>
    full message:
    <div>{{ fullMessage }}</div>

    <p v-if="seen">Now you see me</p>
    <ol>
      <li v-for="(todo, index) of todos" v-bind:key="index">
        {{ todo.text }}
      </li>
    </ol>

    <button v-on:click="count++">{{ count }}</button>

    <TodoItem
      :class="{ test: true }"
      v-for="item in groceryList"
      v-bind:todo="item"
      v-bind:key="item.id"
    ></TodoItem>

    <AlertBox v-bind:text="'gergregr'">
      <template v-slot:user="user">
        {{ user.firstName }}
      </template>
    </AlertBox>

    <div>
      <a
        href="#"
        v-for="(_, index) of steps"
        v-bind:key="index"
        v-bind:class="['tab-button', { active: currentTab === index }]"
        v-on:click="currentTab = index"
      >
        {{ `Step ${index + 1}` }}
      </a>
    </div>
    <component
      v-bind:is="`Step${currentTab}`"
      is-published
      class="btn"
    ></component>

    <h1 v-color:#eee>custom directive</h1>
    <custom-directive></custom-directive>

    {{ $store.state.count }}
  </div>
</template>

<script>
import TodoItem from "./components/TodoItem.vue";
import AlertBox from "./components/AlertBox.vue";
import Step0 from "./Msd/Step1.vue";
import Step1 from "./Msd/Step2.vue";
import Step2 from "./Msd/Step3.vue";
import CustomDirective from "./components/CustomDirective.vue";

var mixin = {
  created: function () {
    this.hello();
  },
  methods: {
    hello: function () {
      console.log("hello from mixin!");
    },
  },
};

export default {
  mixins: [mixin],
  data() {
    return {
      message: "页面加载于 " + new Date().toLocaleString(),
      seen: true,
      count: 0,
      todos: [
        { text: "Learn JavaScript" },
        { text: "Learn Vue" },
        { text: "Build something awesome" },
      ],
      groceryList: [
        { id: 0, text: "蔬菜" },
        { id: 1, text: "奶酪" },
        { id: 2, text: "随便其它什么人吃的东西" },
      ],
      currentTab: 0,
      steps: [null, null, null],
    };
  },
  components: {
    TodoItem,
    AlertBox,
    Step0,
    Step1,
    Step2,
    CustomDirective,
  },
  computed: {
    fullMessage: {
      get: function () {
        console.log("computed!");
        return `${this.message}!!!!!!!!!!!!!!!!`;
      },
    },
  },
  methods: {
    reverseMessage: function () {
      this.message = this.message.split("").reverse().join("");
    },
  },
};
</script>