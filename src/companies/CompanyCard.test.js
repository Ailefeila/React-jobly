import React from "react";
import { render } from "@testing-library/react";
import CompanyCard from "./CompanyCard";
import { MemoryRouter } from "react-router";


it("matches snapshot without logo", function () {
    const { asFragment } = render(
        <MemoryRouter>
          <CompanyCard
              handle="algo"
              name="Algo School"
              description="Become a mediocre developer in 160 weeks."
          />
        </MemoryRouter>,
    );
    expect(asFragment()).toMatchSnapshot();
  });
  