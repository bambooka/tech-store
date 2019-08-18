import React from 'react';
import styled from 'styled-components';
import {ProductConsumer} from "../../context";


export default function ProductFilter() {
    return (
        <ProductConsumer>
            {value => {
                const {
                    search,
                    min,
                    max,
                    company,
                    price,
                    shipping,
                    handleChange,
                    storeProducts
                } = value;

                let companies = new Set();
                companies.add('all');

                for(let product in storeProducts) {
                    companies.add(storeProducts[product]["company"]);
                }

                companies = [...companies];

                return (
                    <div className="row my-5">
                        <div className="col-10 mx-auto">
                            <FilterWrapper>
                                <div>
                                    <label htmlFor="search">Search</label>
                                    <input name="search"
                                           onChange={handleChange}
                                           value={search}
                                           id="search"
                                           className="filter-item"
                                           type="text"
                                    />
                                </div>
                                <div>
                                    <label htmlFor="company">company</label>
                                    <select name="company"
                                            id="company"
                                            className="filter-item"
                                            onChange={handleChange}
                                            value={company}
                                    >
                                        {
                                            companies.map((company, index) => {
                                                return <option key={index} value={company}>
                                                    {company}
                                                </option>
                                            })
                                        }e
                                    </select>
                                </div>
                                <div>
                                    <label htmlFor="price">
                                        <p className="mb-2">
                                            product price: <span>{price}</span>
                                        </p>
                                        <input  type="range"
                                                name="price"
                                                id="price"
                                                min={min}
                                                max={max}
                                                className="filter-price"
                                                value={price}
                                                onChange={handleChange}
                                        />
                                    </label>
                                </div>
                                <div>
                                    <label  htmlFor="shipping">Free shipping</label>
                                    <input  type="checkbox"
                                            id="shipping"
                                            checked={shipping && true}
                                            name="shipping"
                                            onChange={handleChange}

                                    />
                                </div>
                            </FilterWrapper>
                        </div>
                    </div>
                )
            }}
        </ProductConsumer>)
}

const FilterWrapper = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    grid-column-gap: 2rem;
    grid-row-gap: 1rem;
    
    label {
        text-transform: capitalize;
        font-weight: bold;
    }
    
    .filter-item, filter-price {
        display: block;
        width: 100%;
        background: transparent;
        border-radius: 0.5rem;
        border: 2px solid var(--darkGrey);
    }
`