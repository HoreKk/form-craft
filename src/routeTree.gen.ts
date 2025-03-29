/* eslint-disable */

// @ts-nocheck

// noinspection JSUnusedGlobalSymbols

// This file was automatically generated by TanStack Router.
// You should NOT make any changes in this file as it will be overwritten.
// Additionally, you should also exclude this file from your linter and/or formatter to prevent it from being checked or modified.

// Import Routes

import { Route as rootRoute } from './routes/__root'
import { Route as TestFormImport } from './routes/test-form'
import { Route as RedirectImport } from './routes/redirect'
import { Route as PostsImport } from './routes/posts'
import { Route as IndexImport } from './routes/index'

// Create/Update Routes

const TestFormRoute = TestFormImport.update({
  id: '/test-form',
  path: '/test-form',
  getParentRoute: () => rootRoute,
} as any)

const RedirectRoute = RedirectImport.update({
  id: '/redirect',
  path: '/redirect',
  getParentRoute: () => rootRoute,
} as any)

const PostsRoute = PostsImport.update({
  id: '/posts',
  path: '/posts',
  getParentRoute: () => rootRoute,
} as any)

const IndexRoute = IndexImport.update({
  id: '/',
  path: '/',
  getParentRoute: () => rootRoute,
} as any)

// Populate the FileRoutesByPath interface

declare module '@tanstack/react-router' {
  interface FileRoutesByPath {
    '/': {
      id: '/'
      path: '/'
      fullPath: '/'
      preLoaderRoute: typeof IndexImport
      parentRoute: typeof rootRoute
    }
    '/posts': {
      id: '/posts'
      path: '/posts'
      fullPath: '/posts'
      preLoaderRoute: typeof PostsImport
      parentRoute: typeof rootRoute
    }
    '/redirect': {
      id: '/redirect'
      path: '/redirect'
      fullPath: '/redirect'
      preLoaderRoute: typeof RedirectImport
      parentRoute: typeof rootRoute
    }
    '/test-form': {
      id: '/test-form'
      path: '/test-form'
      fullPath: '/test-form'
      preLoaderRoute: typeof TestFormImport
      parentRoute: typeof rootRoute
    }
  }
}

// Create and export the route tree

export interface FileRoutesByFullPath {
  '/': typeof IndexRoute
  '/posts': typeof PostsRoute
  '/redirect': typeof RedirectRoute
  '/test-form': typeof TestFormRoute
}

export interface FileRoutesByTo {
  '/': typeof IndexRoute
  '/posts': typeof PostsRoute
  '/redirect': typeof RedirectRoute
  '/test-form': typeof TestFormRoute
}

export interface FileRoutesById {
  __root__: typeof rootRoute
  '/': typeof IndexRoute
  '/posts': typeof PostsRoute
  '/redirect': typeof RedirectRoute
  '/test-form': typeof TestFormRoute
}

export interface FileRouteTypes {
  fileRoutesByFullPath: FileRoutesByFullPath
  fullPaths: '/' | '/posts' | '/redirect' | '/test-form'
  fileRoutesByTo: FileRoutesByTo
  to: '/' | '/posts' | '/redirect' | '/test-form'
  id: '__root__' | '/' | '/posts' | '/redirect' | '/test-form'
  fileRoutesById: FileRoutesById
}

export interface RootRouteChildren {
  IndexRoute: typeof IndexRoute
  PostsRoute: typeof PostsRoute
  RedirectRoute: typeof RedirectRoute
  TestFormRoute: typeof TestFormRoute
}

const rootRouteChildren: RootRouteChildren = {
  IndexRoute: IndexRoute,
  PostsRoute: PostsRoute,
  RedirectRoute: RedirectRoute,
  TestFormRoute: TestFormRoute,
}

export const routeTree = rootRoute
  ._addFileChildren(rootRouteChildren)
  ._addFileTypes<FileRouteTypes>()

/* ROUTE_MANIFEST_START
{
  "routes": {
    "__root__": {
      "filePath": "__root.tsx",
      "children": [
        "/",
        "/posts",
        "/redirect",
        "/test-form"
      ]
    },
    "/": {
      "filePath": "index.tsx"
    },
    "/posts": {
      "filePath": "posts.tsx"
    },
    "/redirect": {
      "filePath": "redirect.tsx"
    },
    "/test-form": {
      "filePath": "test-form.tsx"
    }
  }
}
ROUTE_MANIFEST_END */
