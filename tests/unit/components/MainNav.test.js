import {render, screen} from '@testing-library/vue';
import MainNav from '@/components/MainNav.vue';
import { describe, expect, it } from 'vitest';

describe('MainNav', () => {
  it('displays company name', () => {
    render(MainNav);
    const companyName = screen.getByText('Bobo Careers');
    expect(companyName).toBeInTheDocument();
  });

  it('displays manu items for navigation', () => {
    render(MainNav);
    const navigationMenuItens = screen.getAllByRole('listitem');
    const navigationMenuTexts = navigationMenuItens.map(
      (item) => item.textContent
    );
    expect(navigationMenuTexts).toEqual([
      'Teams', 'Locations', 'Life at Bobo Corp', 'How we hire', 'Students', 'Jobs',
    ]);
  });
});