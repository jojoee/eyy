import test from 'ava'

/**
 * Library under test
 */

import eyy from '../src/eyy'

test.todo('test eyy')

test('eyy.e(1) e', t => {
  t.is(eyy.e(1), 'e');
})

test('eyy.y(2) yy', t => {
  t.is(eyy.y(2), 'yy');
})

test('eyy.ey(2) eyey', t => {
  t.is(eyy.ey(2), 'eyey');
})

test('eyy.eyy(3) eyyeyyeyy', t => {
  t.is(eyy.eyy(3), 'eyyeyyeyy');
})

test('eyy.yy(4) yyyyyyyy', t => {
  t.is(eyy.yy(4), 'yyyyyyyy');
})
