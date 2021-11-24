<template>
  <div class="paramsbox">
    <div class="tablebox">
      <table v-if="params.table">
        <tr v-for="(item, index) in params.table[0]" :key="index">
          <td v-for="(p, indey) in item" :key="indey">{{ p }}</td>
        </tr>
      </table>
    </div>
    <div class="setbox">
      <table v-if="params.set">
        <tr v-for="(item, index) in params.set" :key="index">
          <td class="key">{{ item.key }}</td>
          <td class="value">{{ item.value }}</td>
        </tr>
      </table>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    params: {
      type: Object,
      default() {
        return {};
      },
    },
  },
};
</script>

<style scoped lang="less">
.paramsbox {
  .tablebox {
    padding: 5px;
    table {
      width: 100%;
      tr {
        display: flex;
        line-height: 40px;
        border-bottom: 2px solid #eee;
        td {
          flex: 1;
        }
      }
    }
  }
  .setbox {
    padding: 5px;
    table {
      width: 100%;
      tr {
        display: flex;
        line-height: 40px;
        border-bottom: 2px solid #eee;
        .key {
          flex: 0.3;
        }
        .value {
          flex: 0.7;
          color: @color-hl-text;
        }
      }
    }
  }
}
</style>