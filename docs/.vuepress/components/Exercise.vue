<template>
  <div class="exercise">
    <div
      class="title"
      v-text="title"
    />
    <div class="table-container">
      <table class="tasks_table">
        <tbody>
          <tr class="problem_header">
            <td class="task">Task</td>
            <td class="text">Text</td>
            <td
              v-if="hasNote"
              class="note"
            >Note</td>
            <td
              v-if="hasGroup"
              class="groups"
            >Capture Groups</td>
            <td class="result">Result</td>
          </tr>
          <Problem
            v-for="(item, index) in data"
            :key="index"
            :data="item"
            :hasNote="hasNote"
            :hasGroup="hasGroup"
            ref="problems"
          />
        </tbody>
      </table>
    </div>
    <div class="input_and_continue">
      <input
        class="exercise_input_field"
        type="text"
        autocapitalize="off"
        autocomplete="off"
        autocorrect="off"
        spellcheck="false"
        placeholder="Type your pattern"
        v-model="input"
      >
      <button
        class="continue"
        :class="{ disabled }"
        :disabled="disabled"
      >
        {{ disabled ? '未通过' : '通过' }}
      </button>
    </div>
    <div
      class="solution"
      v-show="showAnswer"
    >
      <slot></slot>
    </div>
    <div class="solution_hint">
      查看<a
        class="show_solution_button"
        @click="showAnswer = !showAnswer"
      >答案</a>。
    </div>
  </div>
</template>

<script>
export default {
  editorInputTimeoutTimer: null,
  editorLastInput: null,

  props: {
    data: Array,
    title: String,
    solution: String,
    noNext: {
      type: Boolean,
      default: false
    },
    nextUrl: String,
  },
  data() {
    return {
      showAnswer: false,
      input: "",
      disabled: true,
    };
  },
  computed: {
    hasGroup() {
      return this.data.some((item) => !!item.captureData);
    },
    hasNote() {
      return this.data.some((item) => !!item.note);
    },
  },
  watch: {
    input() {
      this.update();
    },
  },
  mounted() {
    this.$on("set-input", (v) => (this.input = v));
  },
  methods: {
    update() {
      null != this.editorInputTimeoutTimer &&
        clearTimeout(this.editorInputTimeoutTimer);
      this.editorInputTimeoutTimer = setTimeout(() => {
        this.updateFromInput();
        this.editorInputTimeoutTimer = null;
      }, 64);
    },
    updateFromInput() {
      var { input } = this.$data;
      if (input != this.editorLastInput) {
        var pattern = this.recurseCompletePattern(
          input,
          0,
          input.length,
          null
        )[1];
        var verify = true;
        this.$refs.problems.forEach(
          (k) => (verify = k.verifyInput(input, pattern) && verify)
        );
        verify ? (this.disabled = false) : (this.disabled = true);
        this.editorLastInput = input;
      }
    },
    recurseCompletePattern(
      a /* input */,
      c /* i */,
      b /* input.length */,
      d /* appendix */
    ) {
      for (var g = "", k = b, e = c; e <= b; e++) {
        var f = "";
        0 < e && (f = a.charAt(e - 1));
        var h = a.charAt(e);
        if (e == b) {
          null != d && (g += d);
          break;
        }
        if (
          (")" == d && "}" == h && "\\" != f) ||
          (")" == d && "]" == h && "\\" != f) ||
          ("]" == d && ")" == h && "\\" != f) ||
          ("]" == d && "}" == h && "\\" != f) ||
          ("}" == d && "]" == h && "\\" != f) ||
          ("}" == d && ")" == h && "\\" != f)
        ) {
          g += d;
          k = e;
          break;
        } else if (h == d && e < b) {
          g += h;
          k = e + 1;
          break;
        } else if ("(" == h && "\\" != f)
          (f = this.recurseCompletePattern(a, e + 1, b, ")")),
            (g += h + f[1]),
            (e += f[0]);
        else if ("[" == h && "\\" != f)
          (f = this.recurseCompletePattern(a, e + 1, b, "]")),
            (g += h + f[1]),
            (e += f[0]);
        else if ("{" == h && "\\" != f)
          (f = this.recurseCompletePattern(a, e + 1, b, "}")),
            (g += h + f[1]),
            (e += f[0]);
        else if (e < b) g += h;
        else break;
      }
      return [k - c, g];
    },
  },
};

</script>

<style lang="scss">
.exercise {
  margin: 0.75em auto 0 auto;
  padding: 1em 26px;
  font-size: 1.125em;
  overflow-x: auto;
  border: 1px solid #eaecef;
  border-radius: 0.15em 0.15em 0.15em 0.15em;
}

.title {
  padding-bottom: 0.5em;
  font-size: 0.9em;
  // text-transform: capitalize;
  color: #757575;
}

.table-container {
  width: 100%;
  overflow-x: auto;

  .tasks_table {
    min-width: 100%;
    display: table;

    .problem_header {
      border: none;

      td {
        padding: 0.25em 0;
        font: bold 0.9em "Ruda", "Segoe UI", "Calibri", "Trebuchet MS",
          Helvetica, Verdana, sans-serif;
        color: #444;
        border: none;
        border-bottom: 1px solid #dcdcdc;

        &.task {
          padding-right: 1.5em;
          text-align: center;
        }

        &.result {
          width: 4em;
          text-align: center;
        }
      }
    }

    tr {
      background-color: transparent;
      border: none;
    }
  }
}

.input_and_continue {
  border: 1px solid #e6e5dc;
  border-radius: 0.15em 0.15em 0.15em 0.15em;

  &::before,
  &::after {
    display: block;
    content: " ";
    clear: both;
  }

  .exercise_input_field {
    float: left;
    width: 75%;
    height: 2em;
    font-size: 1.125em;
    font-family: monospace;
    padding: 0 15px;
    border: 0;
    box-sizing: border-box;
  }

  .continue {
    float: left;
    width: 25%;
    height: 2em;
    padding: 0;
    text-align: center;
    font-size: 1.125em;
    border: 0;
    background: #42b983;
    color: #fff;
    transition: background-color 225ms;
    box-sizing: border-box;
    cursor: pointer;
    border-radius: 0 0.15em 0.15em 0;

    &.disabled {
      background: #c9c9c9;
      color: #f9f9f9;
      transition: background-color 225ms;
    }
  }

  @media (max-width: 768px) {
    .exercise_input_field {
      width: 100%;
    }

    .continue {
      width: 100%;
    }
  }
}

.solution {
  margin: 1em 0 0 0;
  padding: 0.75em;
  font-size: 0.9em;
  border-radius: 0.25em 0.25em 0.25em 0.25em;
  background-color: #f5f5f5;

  > * {
    margin-top: 0.75em;
    margin-bottom: 0.75em;

    &:first-child {
      margin-top: 0;
    }
    &:last-child {
      margin-bottom: 0;
    }
  }
}

.solution_hint {
  padding-top: 0.75em;
  font-size: 0.875em;
  font-style: italic;
  color: #888;

  .show_solution_button {
    cursor: pointer;
  }
}
</style>