import type { Component } from "vue";

export interface IBasicRoutes {
  name: string;
  path: string,
  component: () => Component,
  isCurrent?: Boolean,
  meta: {
    title: string,
    icon: string
  }
};