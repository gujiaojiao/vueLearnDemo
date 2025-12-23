import {
  d as M,
  P as Q,
  r as x,
  b as G,
  x as H,
  c,
  o as y,
  e as k,
  f as e,
  g as n,
  w as l,
  A as h,
  B as A,
  k as z,
  i as m,
  F as I,
  n as K,
  q as B,
  t as S,
  y as O,
  Q as W,
  O as f,
  R as X,
  S as Y,
} from './index-1266dafb.js'
const Z = ['onClick'],
  le = M({
    __name: 'index',
    setup(ee) {
      let _ = Q(),
        v = x([]),
        u = x(0),
        t = G({
          attrName: '',
          categoryId: '',
          attrValueList: [],
          categoryLevel: 3,
        }),
        b = x([])
      H(
        () => _.c3Id,
        () => {
          ;(v.value = []), _.c3Id && V()
        },
      )
      const V = async () => {
          const { c1Id: a, c2Id: i, c3Id: g } = _
          let s = await Y(a, i, g)
          s.code == 200 && (v.value = s.data)
        },
        $ = () => {
          Object.assign(t, {
            attrName: '',
            attrValueList: [],
            categoryId: _.c3Id,
            categoryLevel: 3,
          }),
            (u.value = 1)
        },
        q = (a) => {
          ;(u.value = 1), Object.assign(t, JSON.parse(JSON.stringify(a)))
        },
        N = () => {
          u.value = 0
        },
        w = () => {
          t.attrValueList.push({ valueName: '', flag: !0 }),
            O(() => {
              b.value[t.attrValueList.length - 1].focus()
            })
        },
        D = async () => {
          let a = await W(t)
          console.log(a),
            a.code == 200
              ? ((u.value = 0),
                f({ type: 'success', message: t.id ? '修改成功' : '添加成功' }),
                V())
              : f({ type: 'error', message: t.id ? '修改失败' : '添加失败' })
        },
        E = (a, i) => {
          if (a.valueName.trim() == '') {
            t.attrValueList.splice(i, 1),
              f({ type: 'error', message: '属性值不能为空' })
            return
          }
          if (
            t.attrValueList.find((s) => {
              if (s != a) return s.valueName === a.valueName
            })
          ) {
            t.attrValueList.splice(i, 1),
              f({ type: 'error', message: '属性值不能重复' })
            return
          }
          a.flag = !1
        },
        P = (a, i) => {
          ;(a.flag = !0),
            O(() => {
              b.value[i].focus()
            })
        },
        U = async (a) => {
          ;(await X(a)).code == 200
            ? (f({ type: 'success', message: '删除成功' }), V())
            : f({ type: 'error', message: '删除失败' })
        }
      return (a, i) => {
        const g = c('Category'),
          s = c('el-button'),
          d = c('el-table-column'),
          j = c('el-tag'),
          F = c('el-popconfirm'),
          C = c('el-table'),
          L = c('el-input'),
          J = c('el-form-item'),
          R = c('el-form'),
          T = c('el-card')
        return (
          y(),
          k(
            I,
            null,
            [
              e(g, { scene: n(u) }, null, 8, ['scene']),
              e(
                T,
                { style: { margin: '10px 0px' } },
                {
                  default: l(() => [
                    h(
                      z(
                        'div',
                        null,
                        [
                          e(
                            s,
                            {
                              onClick: $,
                              type: 'primary',
                              size: 'default',
                              icon: 'Plus',
                              disabled: !n(_).c3Id,
                            },
                            { default: l(() => [m(' 添加属性 ')]), _: 1 },
                            8,
                            ['disabled'],
                          ),
                          e(
                            C,
                            {
                              border: '',
                              style: { margin: '10px 0px' },
                              data: n(v),
                            },
                            {
                              default: l(() => [
                                e(d, {
                                  label: '序号',
                                  type: 'index',
                                  align: 'center',
                                  width: '80px',
                                }),
                                e(d, {
                                  label: '属性名称',
                                  width: '120px',
                                  prop: 'attrName',
                                }),
                                e(
                                  d,
                                  { label: '属性值名称' },
                                  {
                                    default: l(({ row: r, $index: p }) => [
                                      (y(!0),
                                      k(
                                        I,
                                        null,
                                        K(
                                          r.attrValueList,
                                          (o, te) => (
                                            y(),
                                            B(
                                              j,
                                              {
                                                style: { margin: '5px' },
                                                key: o.id,
                                              },
                                              {
                                                default: l(() => [
                                                  m(S(o.valueName), 1),
                                                ]),
                                                _: 2,
                                              },
                                              1024,
                                            )
                                          ),
                                        ),
                                        128,
                                      )),
                                    ]),
                                    _: 1,
                                  },
                                ),
                                e(
                                  d,
                                  { label: '操作', width: '120px' },
                                  {
                                    default: l(({ row: r, $index: p }) => [
                                      e(
                                        s,
                                        {
                                          type: 'primary',
                                          size: 'small',
                                          icon: 'Edit',
                                          onClick: (o) => q(r),
                                        },
                                        null,
                                        8,
                                        ['onClick'],
                                      ),
                                      e(
                                        F,
                                        {
                                          title: `你确定删除${r.attrName}?`,
                                          width: '200px',
                                          onConfirm: (o) => U(r.id),
                                        },
                                        {
                                          reference: l(() => [
                                            e(s, {
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
                        ],
                        512,
                      ),
                      [[A, n(u) == 0]],
                    ),
                    h(
                      z(
                        'div',
                        null,
                        [
                          e(
                            R,
                            { inline: !0 },
                            {
                              default: l(() => [
                                e(
                                  J,
                                  { label: '属性名称' },
                                  {
                                    default: l(() => [
                                      e(
                                        L,
                                        {
                                          placeholder: '请输入属性名称',
                                          modelValue: n(t).attrName,
                                          'onUpdate:modelValue':
                                            i[0] ||
                                            (i[0] = (r) => (n(t).attrName = r)),
                                        },
                                        null,
                                        8,
                                        ['modelValue'],
                                      ),
                                    ]),
                                    _: 1,
                                  },
                                ),
                              ]),
                              _: 1,
                            },
                          ),
                          e(
                            s,
                            {
                              onClick: w,
                              disabled: !n(t).attrName,
                              type: 'primary',
                              size: 'default',
                              icon: 'Plus',
                            },
                            { default: l(() => [m(' 添加属性值 ')]), _: 1 },
                            8,
                            ['disabled'],
                          ),
                          e(
                            s,
                            { onClick: N, type: 'primary', size: 'default' },
                            { default: l(() => [m('取消')]), _: 1 },
                          ),
                          e(
                            C,
                            {
                              border: '',
                              style: { margin: '10px 0px' },
                              data: n(t).attrValueList,
                            },
                            {
                              default: l(() => [
                                e(d, {
                                  label: '序号',
                                  type: 'index',
                                  align: 'center',
                                  width: '80px',
                                }),
                                e(
                                  d,
                                  { label: '属性值名称' },
                                  {
                                    default: l(({ row: r, $index: p }) => [
                                      r.flag
                                        ? (y(),
                                          B(
                                            L,
                                            {
                                              key: 0,
                                              ref: (o) => (n(b)[p] = o),
                                              onBlur: (o) => E(r, p),
                                              size: 'small',
                                              placeholder: '请你输入属性值名称',
                                              modelValue: r.valueName,
                                              'onUpdate:modelValue': (o) =>
                                                (r.valueName = o),
                                            },
                                            null,
                                            8,
                                            [
                                              'onBlur',
                                              'modelValue',
                                              'onUpdate:modelValue',
                                            ],
                                          ))
                                        : (y(),
                                          k(
                                            'div',
                                            { key: 1, onClick: (o) => P(r, p) },
                                            S(r.valueName),
                                            9,
                                            Z,
                                          )),
                                    ]),
                                    _: 1,
                                  },
                                ),
                                e(
                                  d,
                                  { label: '属性值操作' },
                                  {
                                    default: l(({ row: r, index: p }) => [
                                      e(
                                        s,
                                        {
                                          type: 'primary',
                                          size: 'small',
                                          icon: 'Delete',
                                          onClick: (o) =>
                                            n(t).attrValueList.splice(p, 1),
                                        },
                                        null,
                                        8,
                                        ['onClick'],
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
                            s,
                            {
                              type: 'primary',
                              size: 'default',
                              onClick: D,
                              disabled: !(n(t).attrValueList.length > 0),
                            },
                            { default: l(() => [m(' 保存 ')]), _: 1 },
                            8,
                            ['disabled'],
                          ),
                          e(
                            s,
                            { onClick: N, type: 'primary', size: 'default' },
                            { default: l(() => [m('取消')]), _: 1 },
                          ),
                        ],
                        512,
                      ),
                      [[A, n(u) == 1]],
                    ),
                  ]),
                  _: 1,
                },
              ),
            ],
            64,
          )
        )
      }
    },
  })
export { le as default }
