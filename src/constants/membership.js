/** Printable registration form in /public — keep filename in sync with download links. */
export const MEMBERSHIP_REGISTRATION_PDF = '/IMTA-Membership-Registration-Form.pdf'

export const MEMBERSHIP_FEES_INR = {
  corporate: 50_000,
  life: 20_000,
  annualFirstYear: 5_000,
  annualRenewal: 2_000,
}

export const MEMBERSHIP_OPTIONS = [
  {
    id: 'corporate',
    label: 'Corporate Membership',
    feeInr: MEMBERSHIP_FEES_INR.corporate,
    summary: 'INR 50,000',
    description: 'For organisations and institutions supporting IMTA.',
  },
  {
    id: 'life',
    label: 'Life Membership',
    feeInr: MEMBERSHIP_FEES_INR.life,
    summary: 'INR 20,000',
    description: 'One-time payment in lieu of yearly renewals.',
  },
  {
    id: 'annual',
    label: 'Annual Membership',
    feeInr: MEMBERSHIP_FEES_INR.annualFirstYear,
    summary: 'INR 5,000 (1st year)',
    description:
      'First year: INR 5,000. Subsequent calendar-year renewals: INR 2,000 each (1 January – 31 December).',
  },
]

export function formatInr(amount) {
  return `₹ ${amount.toLocaleString('en-IN')}`
}

export function membershipFeeLabel(optionId) {
  const option = MEMBERSHIP_OPTIONS.find((o) => o.id === optionId)
  if (!option) return null
  if (optionId === 'annual') {
    return `${formatInr(MEMBERSHIP_FEES_INR.annualFirstYear)} (1st year); renewals ${formatInr(MEMBERSHIP_FEES_INR.annualRenewal)}/year`
  }
  return formatInr(option.feeInr)
}

export function membershipFeeAmount(optionId) {
  const option = MEMBERSHIP_OPTIONS.find((o) => o.id === optionId)
  return option?.feeInr ?? null
}
