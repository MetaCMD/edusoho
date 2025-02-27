<template>
  <layout
    :active="moduleType === currentModuleType"
    :is-first="isFirst"
    :is-last="isLast"
    :preview="preview"
    :validator-result="validatorResult"
    @event-actions="handleClickAction"
  >
    <div class="classroom-list">
      <div class="clearfix">
        <div class="classroom-list__title pull-left text-overflow">{{ moduleData.title }}</div>
        <div class="classroom-list__more pull-right">{{ 'site.btn.see_more' | trans }}<a-icon type="right" /></div>
      </div>

      <div :class="{ clearfix: moduleData.displayStyle === 'distichous' }">
        <component
          :is="currentComponent"
          v-for="item in list"
          :key="item.id"
          :item="item"
        />
      </div>
    </div>
  </layout>
</template>

<script>
import _ from 'lodash';
import { Classroom } from 'common/vue/service/index.js';
import moduleMixin from '../moduleMixin';
import ColumnItem from './ColumnItem.vue';
import RowItem from './RowItem.vue';

export default {
  name: 'ClassroomList',

  mixins: [moduleMixin],

  computed: {
    currentComponent() {
      const { displayStyle } = this.moduleData;
      return displayStyle === 'distichous' ? ColumnItem : RowItem;
    }
  },

  data() {
    return {
      list: []
    }
  },

  mounted() {
    this.fetchCourse();
  },

  watch: {
    moduleData: {
      handler: function() {
        this.fetchCourse();
      },
      deep: true
    }
  },

  methods: {
    async fetchCourse() {
      const { sort, limit, lastDays, categoryId, sourceType, items } = this.moduleData;
      if (sourceType === 'custom') {
        this.list = items;
        return;
      }
      const { data } = await Classroom.search({
        sort,
        limit,
        lastDays,
        categoryId
      });
      this.list = data;
    }
  }
}
</script>

<style lang="less" scoped>
.classroom-list {
  padding-right: 16px;
  padding-left: 16px;

  .classroom-list__title {
    position: relative;
    padding-left: 10px;
    max-width: 60%;
    height: 24px;
    font-size: 16px;
    font-weight: 500;
    color: #333;
    line-height: 24px;

    &::before {
      content: "";
      position: absolute;
      top: 6px;
      left: 0;
      width: 4px;
      height: 12px;
      background: #03c777;
      border-radius: 1px;
    }
  }

  &__more {
    margin-top: 4px;
    font-size: 12px;
    color: #999;
    line-height: 16px;
  }
}
</style>

