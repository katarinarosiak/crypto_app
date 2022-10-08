import React from "react";
import { render, screen } from "@testing-library/react";
import {
  findCurrentCoin,
  parseChanges,
  getFiatNames,
} from '../../utils/helpers';

describe("Pairing component", () => {
  it('returns an array of fiat names', () => {
    const coins = {'BCHALL': {
      ask: 12321,
      averages: {},
      bid: 1232,
      changes: {percent: {day:123, week: 567, month: 1009}, price: {day: 789, week: 900, month: 89}},
      display_timestamp: '11:01:99',
      high: 3321,
      last: 1231,
      low: -1233,
      open: 123,
      timestamp: '12 set 2001',
      volume: 123311,
    }, 
    'BCHANG': {
      ask: 12321,
      averages: {},
      bid: 1232,
      changes: {percent: {day:123, week: 567, month: 1009}, price: {day: 789, week: 900, month: 89}},
      display_timestamp: '11:01:99',
      high: 3321,
      last: 1231,
      low: -1233,
      open: 123,
      timestamp: '12 set 2001',
      volume: 123311,
    }
  };
    expect(getFiatNames(coins)).toEqual(["Show All", "ALL", 'ANG']);
  })

    it('the changes object is parsed into array of objects', () => {
    const coinItem = {'BCH/ALL': {
      ask: 12321,
      averages: {},
      bid: 1232,
      changes: {percent: {day:123, week: 567, month: 1009}, price: {day: 789, week: 900, month: 89}},
      display_timestamp: '11:01:99',
      high: 3321,
      last: 1231,
      low: -1233,
      open: 123,
      timestamp: '12 set 2001',
      volume: 123311,
    }};

    const expected = [
      {
        title: "Change: day",
        val: [123, 789]
      },
      {
        title: "Change: week",
        val: [567, 900]
      },
      {
        title: "Change: month",
        val: [1009, 89]
      },
    ];

    expect(parseChanges(coinItem)).toEqual(expected);
  })

  it('finds a coin based on name', () => {
    const coins = {'BCH/ALL': {
      ask: 12321,
      averages: {},
      bid: 1232,
      changes: {percent: {day:123, week: 567, month: 1009}, price: {day: 789, week: 900, month: 89}},
      display_timestamp: '11:01:99',
      high: 3321,
      last: 1231,
      low: -1233,
      open: 123,
      timestamp: '12 set 2001',
      volume: 123311,
    }, 
    'BCH/ANG': {
      ask: 12321,
      averages: {},
      bid: 1232,
      changes: {percent: {day:123, week: 567, month: 1009}, price: {day: 789, week: 900, month: 89}},
      display_timestamp: '11:01:99',
      high: 3321,
      last: 1231,
      low: -1233,
      open: 123,
      timestamp: '12 set 2001',
      volume: 123311,
    }
  };

  const expected = {'BCH/ALL': {
    ask: 12321,
    averages: {},
    bid: 1232,
    changes: {percent: {day:123, week: 567, month: 1009}, price: {day: 789, week: 900, month: 89}},
    display_timestamp: '11:01:99',
    high: 3321,
    last: 1231,
    low: -1233,
    open: 123,
    timestamp: '12 set 2001',
    volume: 123311,
  }};

    expect(findCurrentCoin(coins, 'BCH/ALL')).toEqual(expected);
  })
})