import getBudgetObject from './7-getBudgetObject.js';

export default function getFullBudgetObject(income, gdp, capita) {
  const budget = getBudgetObject(income, gdp, capita);
  const fullBudget = Object.assign({}, budget, {
    getIncomeInDollars: income => `$${income}`,
    getIncomeInEuros: income => `${income} euros`
  });

  return fullBudget;
}
