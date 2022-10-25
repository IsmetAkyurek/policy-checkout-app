export type PolicyPackage = {
  id: number;
  name: string;
  price: number;
  features: string[];
  description: string;
  coverage: PolicyPackageCoverage;
  paymentSchedules: PolicyPaymentSchedule[];
};

export type PolicyPackageCoverage = {
  min: number;
  step: number;
};

export type PolicyPaymentSchedule = {
  id: number;
  name: string;
  discountMultiplier: number;
};
