import {render, screen} from '@testing-library/vue';
import MainNav from '@/components/MainNav.vue';
import { describe, expect, it } from 'vitest';
import userEvent from "@testing-library/user-event";

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

    describe("when the user logs in", () => {
    it("displays user profile picture", async () => {
      render(MainNav);

      let profileImage = screen.queryByRole("img", {
        name: /user profile image/i,
      });
      expect(profileImage).not.toBeInTheDocument();

      const loginButton = screen.getByRole("button", {
        name: /sign in/i,
      });
      await userEvent.click(loginButton);

      profileImage = screen.getByRole("img", {
        name: /user profile image/i,
      });
      expect(profileImage).toBeInTheDocument();
    });
  });
});