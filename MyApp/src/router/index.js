import Vue from 'vue'
import Router from 'vue-router'
import Index from '../pages/Index/Index'
import Broadcast from '../pages/BroadCast/Broadcast'
import AudioBook from '../pages/AudioBook/AudioBook'
import Movie from '../pages/Movie/Movie'
import Mine from '../pages/Mine/Mine'
import Detail from '../pages/Movie/Detail'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Index',
      component: Index
    },
    {
      path: '/broadcast',
      name: 'Broadcast',
      component: Broadcast
    },
    {
      path: '/audioBook',
      name: 'AudioBook',
      component: AudioBook
    },
    {
      path: '/movie',
      name: 'Movie',
      component: Movie,
      children:[
        {
          path:'/:movieId',
          component: Detail
        }
      ]
    },
    {
      path: '/mine',
      name: 'Mine',
      component: Mine
    },
    {
      path: '/Index',
      redirect: '/'
    },
    {
      path: '*',
      redirect: '/'
    }
  ]
})
