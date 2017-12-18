
const Index = resolve => require(['./view/home.vue'], resolve)
const Topic = resolve => require(['./view/topic.vue'],resolve);
const Category = resolve => require(['./view/category.vue'],resolve);

export default[
    {
        path:'/index',
        component:Index,
        name:'index'
    },
    {
        path:'/topic/:id',
        component:Topic,
        name:'topic'
    },
    {
        path:'/category/:id',
        component:Category,
        name:'category',
        alias:'cate'
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