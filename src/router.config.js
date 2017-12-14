
const Index = resolve => require(['./view/home.vue'], resolve)
export default[
    {
        path:'/index',
        component:Index,
        name:'index'
    },
    {
        path:'/',
        redirect:'/index',
    },
    {
        path:'*',
        redirect:'/index',
    }
];