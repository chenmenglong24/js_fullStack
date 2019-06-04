/**
 * 管理 router
 * can't find module 'XXX'  npm i XXX
 */
const Router = require('koa-router');
const router = Router();

const user = {
  name: 'jay',
  posts: [
    {id: 0, title: '七里香'},
    {id: 1, title: '发如雪'}
  ]
}
const postsDetail = [
  {id: 0, content: '窗外的麻雀'},
  {id: 1, content: '<strong>繁花如三千东流水</strong>'}
]

router.get('/user', async (ctx) => {
  await ctx.render('user', { user });
})
router.get('/posts', async (ctx) => {
    const { id } = ctx.query;
    const post = postsDetail.find(postItem => postItem.id == id);
    await ctx.render('post', { post });
})
// 浏览器地址栏 get
router.get('/create', async (ctx) => {
  await ctx.render('create');
})
// submit method = 'post'
router.post('/create', async (ctx) => {
  console.log(ctx.request.body);
  const {title, content} = ctx.request.body;
  let id = Date.now();
  user.posts.push({
    id,
    title
  })
  postsDetail.push({
    id,
    content
  })
  ctx.redirect('/user');
})

module.exports = router;