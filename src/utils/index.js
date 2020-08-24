export const normalizeInput = ({
  name,
  street,
  number,
  zip,
  city,
  state,
  country,
  phone,
  district,
  description,
  superMarketMainImage,
}) => {
  const data = {
    superMarketName: name,
    superMarketMainImage,
    superMarketDescription: description,
    superMarketPhone: parseInt(phone),
    superMarketLocation: {
      street,
      number,
      district,
      zip: parseInt(zip),
      country,
      city,
      state,
    },
  };

  return data;
};

