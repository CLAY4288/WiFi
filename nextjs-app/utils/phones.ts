type Phone = {
  id: string;
  name: string;
  model: string;
  blocked: boolean;
};

const phones: Phone[] = [];

const managePhone = (phoneId: string, action: string) => {
  const phoneIndex = phones.findIndex((phone) => phone.id === phoneId);
  if (phoneIndex === -1) return;

  switch (action) {
    case "BLOCK":
      phones[phoneIndex].blocked = true;
      break;
    case "UNBLOCK":
      phones[phoneIndex].blocked = false;
      break;
    default:
      break;
  }
};

export { Phone, phones, managePhone };