import Vue from 'vue'
import Router from 'vue-router'
import Home from '../pages/Home/Home.vue'
import StudentLogin from '../pages/Student/Login.vue'
import StudentSettings from '../pages/Student/Settings.vue'
import StudentAssignmentView from '../pages/Student/AssignmentView.vue'
import MyAssingmentFolders from '../pages/Teacher/MyAssignmentFolders.vue'

Vue.use(Router)

export default new Router({
  mode: 'hash',
  routes: [
    {
      path: '/',
      component: Home
    },
    {
      path: '/student',
      component: StudentLogin
    },
    {
      path: '/student-settings',
      component: StudentSettings
    },
    {
      path: '/student-assignment-view',
      component: StudentAssignmentView
    },
    {
      path: '/teacher-my-assignment-folders',
      component: MyAssingmentFolders
    }
  ]
})
