import React, { useState } from 'react';
import { Input, Button, Card, CardBody, Grid } from 'shadcn';

const Filters = ({ onApplyFilters }) => {
  const [filters, setFilters] = useState({
    step: '',
    customer: '',
    age: '',
    gender: '',
    zipcodeOri: '',
    merchant: '',
    zipMerchant: '',
    category: '',
    amount: '',
    fraud: ''
  });

  const handleChange = (e) => {
    setFilters({
      ...filters,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onApplyFilters(filters);
  };

  return (
    <Card className="max-w-md mx-auto mt-8">
      <CardBody>
        <form onSubmit={handleSubmit}>
          <Grid gap={4} cols={{ base: 1, md: 2 }}>
            <Input name="step" placeholder="Step" onChange={handleChange} />
            <Input name="customer" placeholder="Customer" onChange={handleChange} />
            <Input name="age" placeholder="Age" onChange={handleChange} />
            <Input name="gender" placeholder="Gender" onChange={handleChange} />
            <Input name="zipcodeOri" placeholder="Zipcode Origin" onChange={handleChange} />
            <Input name="merchant" placeholder="Merchant" onChange={handleChange} />
            <Input name="zipMerchant" placeholder="Zip Merchant" onChange={handleChange} />
            <Input name="category" placeholder="Category" onChange={handleChange} />
            <Input name="amount" placeholder="Amount" onChange={handleChange} />
            <Input name="fraud" placeholder="Fraud" onChange={handleChange} />
          </Grid>
          <Button type="submit" variant="solid" color="primary" className="mt-4 w-full">
            Apply Filters
          </Button>
        </form>
      </CardBody>
    </Card>
  );
};

export default Filters;
