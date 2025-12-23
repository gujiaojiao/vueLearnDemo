import {
  M as k,
  d as K,
  r as p,
  b as Q,
  D as W,
  c as n,
  o as x,
  e as h,
  f as e,
  w as o,
  i as U,
  g as d,
  k as X,
  N,
  q as Y,
  y as z,
  O as _,
  _ as Z,
} from './index-1266dafb.js'
const ee = (u, s) => k.get(`/admin/product/baseTrademark/${u}/${s}`),
  ae = (u) =>
    u.id
      ? k.put('/admin/product/baseTrademark/update', u)
      : k.post('/admin/product/baseTrademark/save', u),
  le = (u) => k.delete(`/admin/product/baseTrademark/remove/${u}`),
  te = ['src'],
  oe = ['src'],
  re = K({
    __name: 'index',
    setup(u) {
      let s = p(1),
        g = p(3),
        T = p(0),
        y = p([]),
        i = p(!1),
        r = Q({ tmName: '', logoUrl: '' }),
        m = p()
      const f = async (a = 1) => {
        s.value = a
        let l = await ee(s.value, g.value)
        l.code == 200 &&
          ((T.value = l.data.total), (y.value = l.data.records), console.log(y))
      }
      W(() => {
        f()
      })
      const w = () => {
          f()
        },
        q = () => {
          ;(i.value = !0),
            (r.id = 0),
            (r.tmName = ''),
            (r.logoUrl = ''),
            z(() => {
              m.value.clearValidate('tmName'), m.value.clearValidate('logoUrl')
            })
        },
        O = (a) => {
          z(() => {
            m.value.clearValidate('tmName'), m.value.clearValidate('logoUrl')
          }),
            (i.value = !0),
            Object.assign(r, a)
        },
        P = () => {
          i.value = !1
        },
        E = async () => {
          await m.value.validate()
          let a = await ae(r)
          console.log(a.code),
            a.code == 200
              ? ((i.value = !1),
                _({
                  type: 'success',
                  message: r.id ? '修改品牌成功' : '添加品牌成功',
                }),
                f(r.id ? s.value : 1))
              : (_({
                  type: 'error',
                  message: r.id ? '修改品牌失败' : '添加品牌失败',
                }),
                (i.value = !1))
        },
        G = (a) =>
          a.type == 'image/png' ||
          a.type == 'image/jpg' ||
          a.type == 'image/gif'
            ? a.size / 1024 / 1024 <= 4
              ? !0
              : (_({ type: 'error', message: '上传文件大小小于4M' }), !1)
            : (_({ type: 'error', message: '上传文件格式务必PNG|JPG|GIF' }),
              !1),
        M = {
          tmName: [
            {
              required: !0,
              trigger: 'blur',
              validator: (a, l, c) => {
                l.trim().length >= 2
                  ? c()
                  : c(new Error('品牌名称位数大于等于两位'))
              },
            },
          ],
          logoUrl: [
            {
              required: !0,
              validator: (a, l, c) => {
                l ? c() : c(new Error('LOGO图片务必上传'))
              },
            },
          ],
        },
        $ = (a, l) => {
          ;(r.logoUrl = a.data), m.value.clearValidate('logoUrl')
        },
        A = async (a) => {
          ;(await le(a)).code == 200
            ? (_({ type: 'success', message: '删除品牌成功' }),
              f(y.value.length > 1 ? s.value : s.value - 1))
            : _({ type: 'error', message: '删除品牌失败' })
        }
      return (a, l) => {
        const c = n('Plus'),
          V = n('el-icon'),
          v = n('el-button'),
          b = n('el-table-column'),
          D = n('el-popconfirm'),
          L = n('el-table'),
          j = n('el-pagination'),
          R = n('el-card'),
          S = n('el-input'),
          C = n('el-form-item'),
          B = n('el-upload'),
          H = n('el-form'),
          I = n('el-dialog')
        return (
          x(),
          h('div', null, [
            e(
              R,
              { class: 'box-card' },
              {
                default: o(() => [
                  e(
                    v,
                    { type: 'primary', onClick: q },
                    {
                      default: o(() => [
                        e(V, null, { default: o(() => [e(c)]), _: 1 }),
                        U(' 添加品牌 '),
                      ]),
                      _: 1,
                    },
                  ),
                  e(
                    L,
                    {
                      data: d(y),
                      style: { margin: '10px 0', width: '100%' },
                      border: '',
                    },
                    {
                      default: o(() => [
                        e(b, {
                          label: '序号',
                          width: '80px',
                          align: 'center',
                          type: 'index',
                        }),
                        e(b, {
                          prop: 'tmName',
                          label: '品牌名称',
                          align: 'center',
                        }),
                        e(
                          b,
                          { prop: 'name', label: '品牌logo', align: 'center' },
                          {
                            default: o(({ row: t, $index: J }) => [
                              X(
                                'img',
                                {
                                  src: t.logoUrl,
                                  style: { width: '100px', height: '100px' },
                                },
                                null,
                                8,
                                te,
                              ),
                            ]),
                            _: 1,
                          },
                        ),
                        e(
                          b,
                          {
                            prop: 'address',
                            label: '操作说明',
                            align: 'center',
                          },
                          {
                            default: o(({ row: t, $index: J }) => [
                              e(
                                v,
                                {
                                  type: 'primary',
                                  size: 'small',
                                  icon: 'Edit',
                                  onClick: (F) => O(t),
                                },
                                null,
                                8,
                                ['onClick'],
                              ),
                              e(
                                D,
                                {
                                  title: `您确定要删除${t.tmName}?`,
                                  width: '250px',
                                  icon: 'Delete',
                                  onConfirm: (F) => A(t.id),
                                },
                                {
                                  reference: o(() => [
                                    e(v, {
                                      type: 'primary',
                                      size: 'small',
                                      icon: 'Delete',
                                    }),
                                  ]),
                                  _: 2,
                                },
                                1032,
                                ['title', 'onConfirm'],
                              ),
                            ]),
                            _: 1,
                          },
                        ),
                      ]),
                      _: 1,
                    },
                    8,
                    ['data'],
                  ),
                  e(
                    j,
                    {
                      'current-page': d(s),
                      'onUpdate:currentPage':
                        l[0] ||
                        (l[0] = (t) => (N(s) ? (s.value = t) : (s = t))),
                      'page-size': d(g),
                      'onUpdate:pageSize':
                        l[1] ||
                        (l[1] = (t) => (N(g) ? (g.value = t) : (g = t))),
                      'page-sizes': [3, 5, 7, 9],
                      background: a.background,
                      layout: ' prev, pager,next,jumper,->,sizes,total',
                      total: d(T),
                      onSizeChange: w,
                      onCurrentChange: f,
                    },
                    null,
                    8,
                    ['current-page', 'page-size', 'background', 'total'],
                  ),
                ]),
                _: 1,
              },
            ),
            e(
              I,
              {
                modelValue: d(i),
                'onUpdate:modelValue':
                  l[3] || (l[3] = (t) => (N(i) ? (i.value = t) : (i = t))),
                title: d(r).id ? '修改品牌' : '添加品牌',
              },
              {
                footer: o(() => [
                  e(
                    v,
                    { type: 'primary', size: 'default', onClick: P },
                    { default: o(() => [U(' 取消 ')]), _: 1 },
                  ),
                  e(
                    v,
                    { type: 'primary', size: 'default', onClick: E },
                    { default: o(() => [U(' 确定 ')]), _: 1 },
                  ),
                ]),
                default: o(() => [
                  e(
                    H,
                    {
                      style: { width: '80%' },
                      model: d(r),
                      rules: M,
                      ref_key: 'formRef',
                      ref: m,
                    },
                    {
                      default: o(() => [
                        e(
                          C,
                          {
                            label: '品牌名称',
                            'label-width': '100px',
                            prop: 'tmName',
                          },
                          {
                            default: o(() => [
                              e(
                                S,
                                {
                                  placeholder: '请您输入品牌名称',
                                  modelValue: d(r).tmName,
                                  'onUpdate:modelValue':
                                    l[2] || (l[2] = (t) => (d(r).tmName = t)),
                                },
                                null,
                                8,
                                ['modelValue'],
                              ),
                            ]),
                            _: 1,
                          },
                        ),
                        e(
                          C,
                          {
                            label: '品牌LOGO',
                            'label-width': '100px',
                            prop: 'logoUrl',
                          },
                          {
                            default: o(() => [
                              e(
                                B,
                                {
                                  class: 'avatar-uploader',
                                  action: '/api/admin/product/fileUpload',
                                  'show-file-list': !0,
                                  'on-success': $,
                                  'before-upload': G,
                                },
                                {
                                  default: o(() => [
                                    d(r).logoUrl
                                      ? (x(),
                                        h(
                                          'img',
                                          {
                                            key: 0,
                                            src: d(r).logoUrl,
                                            class: 'avatar',
                                          },
                                          null,
                                          8,
                                          oe,
                                        ))
                                      : (x(),
                                        Y(
                                          V,
                                          {
                                            key: 1,
                                            class: 'avatar-uploader-icon',
                                          },
                                          { default: o(() => [e(c)]), _: 1 },
                                        )),
                                  ]),
                                  _: 1,
                                },
                              ),
                            ]),
                            _: 1,
                          },
                        ),
                      ]),
                      _: 1,
                    },
                    8,
                    ['model'],
                  ),
                ]),
                _: 1,
              },
              8,
              ['modelValue', 'title'],
            ),
          ])
        )
      }
    },
  })
const ie = Z(re, [['__scopeId', 'data-v-b2e0fa1c']])
export { ie as default }
