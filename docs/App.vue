<template>
  <div class="lbzui lbz-typography">
    <lbz-drawer
      :active.sync="vactive"
      subtitle="Material Components for Vue.js"
      class="lbzui__drawer"
      role="navigation"
    >
      <template #start>
        <router-link
          tag="h1"
          to="/"
          class="lbz-drawer__title"
        >@lbzui/vue</router-link>
      </template>
      <template #center>
        <lbz-list router-link tag="nav" item-tag="a">
          <lbz-divider/>
          <lbz-list-item to="/">Getting started</lbz-list-item>
          <lbz-divider/>
          <span class="lbz-list__subtitle">Styles</span>
          <lbz-list-item
            v-for="item of vstyles"
            :key="item.path"
            :to="item.path"
          >{{ item.label }}</lbz-list-item>
          <lbz-divider/>
          <span class="lbz-list__subtitle">Components</span>
          <lbz-list-item
            v-for="item of vcomponents"
            :key="item.path"
            :to="item.path"
          >{{ item.label }}</lbz-list-item>
          <lbz-divider/>
          <span class="lbz-list__subtitle">Useful links</span>
          <lbz-list-item
            v-for="item of vlinks"
            :key="item.path"
            :router-link="false"
            :href="item.path"
            target="_blank"
          >
            <template #center>{{ item.label }}</template>
            <template #end><lbz-icon>open_in_new</lbz-icon></template>
          </lbz-list-item>
          <lbz-divider/>
          <span class="lbz-list__subtitle">Choose theme (IE not supported)</span>
          <lbz-list-item
            :router-link="false"
            tag="span"
            disabled
            style="padding: 0;"
          >
          <lbz-radio
            v-model="vtheme"
            id="light"
            name="light"
            value="light"
            @change="fsetTheme"
          >Light</lbz-radio>
          <lbz-radio
            v-model="vtheme"
            id="dark"
            name="dark"
            value="dark"
            @change="fsetTheme"
          >Dark</lbz-radio>
        </lbz-list-item>
        </lbz-list>
      </template>
    </lbz-drawer>
    <main class="lbzui__main" role="main">
      <router-view class="lbzui__main__container"/>
    </main>
    <lbz-fab class="lbzui__fab" @click.stop="vactive = true">menu</lbz-fab>
  </div>
</template>

<script lang="ts">
import { Component, Watch, Vue } from 'vue-property-decorator';

@Component
export default class App extends Vue {
  private vstyles: any[] = [
    {
      path: '/styles/elevation',
      label: 'Elevation',
    },
    {
      path: '/styles/layout-grid',
      label: 'Layout grid',
    },
    {
      path: '/styles/shadow',
      label: 'Shadow',
    },
    {
      path: '/styles/surface',
      label: 'Surface',
    },
    {
      path: '/styles/typography',
      label: 'Typography',
    },
  ];
  private vcomponents: any[] = [
    {
      path: '/components/backdrop',
      label: 'Backdrop',
    },
    {
      path: '/components/button',
      label: 'Button',
    },
    {
      path: '/components/card',
      label: 'Card',
    },
    {
      path: '/components/dialog',
      label: 'Dialog',
    },
    {
      path: '/components/divider',
      label: 'Divider',
    },
    {
      path: '/components/drawer',
      label: 'Drawer',
    },
    {
      path: '/components/empty-state',
      label: 'Empty state',
    },
    {
      path: '/components/fab',
      label: 'FAB',
    },
    {
      path: '/components/icon',
      label: 'Icon',
    },
    {
      path: '/components/icon-button',
      label: 'Icon button',
    },
    {
      path: '/components/list',
      label: 'List',
    },
    {
      path: '/components/radio',
      label: 'Radio',
    },
    {
      path: '/components/tab',
      label: 'Tab',
    },
    {
      path: '/components/top-app-bar',
      label: 'Top app bar',
    },
  ];
  private vlinks: any[] = [
    {
      path: 'https://github.com/lbzui/lbzui-vue',
      label: 'Open source code',
    },
    {
      path: 'https://github.com/lbzui/lbzui-vue/tree/master/docs/views',
      label: 'Docs sample code',
    },
    {
      path: 'https://github.com/orgs/lbzui/projects/1',
      label: 'LBZUI board',
    },
    {
      path: 'https://github.com/lbzui/lbzui-vue/projects/1',
      label: '@lbzui/vue board',
    },
    // {
    //   path: 'https://github.com/lbzui/lbzui-vue/issues',
    //   label: 'Issues',
    // },
    // {
    //   path: 'https://github.com/lbzui/lbzui-vue/blob/master/CHANGELOG.md',
    //   label: 'Changelog',
    // },
    {
      path: 'https://material.io/',
      label: 'Material design',
    },
    {
      path: 'https://material.io/resources/color/',
      label: 'Material color tool',
    },
    {
      path: 'https://material.io/resources/icons/',
      label: 'Material icons',
    },
  ];
  private vwidth: number = 0;
  private vactive: boolean = true;
  private vtheme: string = 'light';

  private mounted() {
    this.fresize(document.body.clientWidth);
    window.onresize = () => {
      this.fresize(document.body.clientWidth);
    };
  }

  @Watch('$route.name')
  private frouteChanged(val: string, oldVal: string) {
    this.fcloseDrawer();
  }

  private fresize(val: number) {
    this.vwidth = val;
    this.vactive = val > 719;
  }

  private fcloseDrawer() {
    if (this.vwidth <= 719) {
      this.vactive = false;
    }
  }

  private fsetTheme(val: string, e: MouseEvent) {
    const isDark: boolean = val === 'dark';

    document.documentElement.setAttribute('theme', val);
    document.querySelector('meta[name=apple-mobile-web-app-status-bar-style]')!
      .setAttribute('content', isDark ? 'black' : 'default');
    document.querySelector('meta[name=theme-color]')!
      .setAttribute('content', isDark ? '#000' : '#3700b3');
    this.fcloseDrawer();
  }
}
</script>

<style lang="less">
@import "./assets/css/index.less";
</style>