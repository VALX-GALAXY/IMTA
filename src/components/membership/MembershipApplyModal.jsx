import { useId, useRef, useState } from 'react'
import { FilePenLine, IndianRupee, Loader2, XIcon } from 'lucide-react'
import { toast } from 'sonner'
import {
  MEMBERSHIP_OPTIONS,
  MEMBERSHIP_FEES_INR,
  formatInr,
  membershipFeeAmount,
  membershipFeeLabel,
} from '@/constants/membership'
import { submitMembershipApplication } from '@/lib/membershipApi'
import { ApiRequestError } from '@/lib/api'
import { Button } from '@/components/ui/button'
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { cn } from '@/lib/utils'

const selectClass =
  'h-10 w-full rounded-lg border border-border bg-surface px-3 text-sm text-ink shadow-sm outline-none transition-colors focus-visible:border-gold focus-visible:ring-2 focus-visible:ring-gold/25'

const textareaClass =
  'min-h-[72px] w-full rounded-lg border border-border bg-surface px-3 py-2 text-sm text-ink shadow-sm outline-none transition-colors focus-visible:border-gold focus-visible:ring-2 focus-visible:ring-gold/25'

function FormSection({ title, children, className }) {
  return (
    <div
      className={cn(
        'rounded-xl border border-dashed border-border bg-highlight/50 p-4 md:p-5',
        className,
      )}
    >
      <h3 className="mb-4 text-sm font-semibold tracking-wide text-ink">{title}</h3>
      {children}
    </div>
  )
}

export function MembershipApplyModal({ open, onOpenChange }) {
  const formId = useId()
  const formRef = useRef(null)
  const [declaration, setDeclaration] = useState(false)
  const [selectedRole, setSelectedRole] = useState('')
  const [submitting, setSubmitting] = useState(false)

  const selectedFee = membershipFeeAmount(selectedRole)
  const selectedFeeLabel = membershipFeeLabel(selectedRole)

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (!declaration) {
      toast.error('Please confirm the declaration to continue.')
      return
    }

    const form = formRef.current
    if (!form) return

    const formData = new FormData(form)
    formData.set('declarationAccepted', 'true')

    setSubmitting(true)
    try {
      await submitMembershipApplication(formData)
      toast.success(
        'Thank you. Your membership application has been submitted. The secretariat may contact you at the email provided.',
      )
      form.reset()
      setDeclaration(false)
      setSelectedRole('')
      onOpenChange(false)
    } catch (err) {
      if (err instanceof ApiRequestError && err.errors?.length) {
        const first = err.errors[0]
        toast.error(first.message || err.message)
      } else {
        toast.error(err.message || 'Could not submit your application. Please try again.')
      }
    } finally {
      setSubmitting(false)
    }
  }

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent
        showCloseButton={false}
        className={cn(
          'flex max-h-[min(92vh,880px)] w-full max-w-[calc(100%-1.5rem)] flex-col gap-0 overflow-hidden p-0 sm:max-w-3xl',
          'border-border bg-surface text-ink shadow-surface-lg ring-1 ring-border',
        )}
      >
        <DialogHeader className="shrink-0 flex-row items-center justify-between gap-4 border-b border-border bg-surface px-5 py-4 md:px-6">
          <DialogTitle className="font-sans text-lg font-semibold text-ink md:text-xl">
            Apply for membership
          </DialogTitle>
          <DialogClose asChild>
            <Button
              variant="ghost"
              size="icon-sm"
              className="shrink-0 rounded-full text-earth hover:bg-highlight hover:text-ink"
              aria-label="Close"
            >
              <XIcon className="size-5" />
            </Button>
          </DialogClose>
        </DialogHeader>

        <div
          className="min-h-0 flex-1 overflow-y-auto overscroll-y-contain [-webkit-overflow-scrolling:touch] px-5 py-6 pb-8 md:px-6"
          data-lenis-prevent
        >
          <form ref={formRef} id={formId} onSubmit={handleSubmit} className="space-y-6">
            <div className="rounded-xl border border-gold/30 bg-gold/5 p-4 text-sm leading-relaxed text-earth">
              <p className="font-medium text-ink">Membership fees apply</p>
              <ul className="mt-2 space-y-1">
                {MEMBERSHIP_OPTIONS.map((option) => (
                  <li key={option.id}>
                    <span className="font-medium text-ink">{option.label}:</span>{' '}
                    {option.id === 'annual'
                      ? `${formatInr(option.feeInr)} (1st year); renewals ${formatInr(MEMBERSHIP_FEES_INR.annualRenewal)}/year`
                      : formatInr(option.feeInr)}
                  </li>
                ))}
              </ul>
              <p className="mt-3">
                Submitting this form does not grant immediate membership. Pay the applicable fee, then the
                secretariat will verify payment and approve your application.
              </p>
            </div>

            <FormSection title="Apply membership for the role *">
              <Label htmlFor={`${formId}-post`} className="sr-only">
                Membership role
              </Label>
              <select
                id={`${formId}-post`}
                name="post"
                required
                className={selectClass}
                value={selectedRole}
                onChange={(e) => setSelectedRole(e.target.value)}
              >
                <option value="" disabled>
                  — Select membership type —
                </option>
                {MEMBERSHIP_OPTIONS.map((option) => (
                  <option key={option.id} value={option.id}>
                    {option.label} —{' '}
                    {option.id === 'annual'
                      ? `${formatInr(option.feeInr)} (1st year)`
                      : formatInr(option.feeInr)}
                  </option>
                ))}
              </select>
              {selectedRole ? (
                <p className="mt-3 inline-flex items-start gap-2 rounded-lg border border-border bg-surface px-3 py-2 text-sm text-ink">
                  <IndianRupee className="mt-0.5 size-4 shrink-0 text-gold" aria-hidden />
                  <span>
                    <span className="font-medium">Fee payable with this application:</span>{' '}
                    {selectedFeeLabel}. Transfer via NEFT / UPI / cheque or DD before or with submission.
                  </span>
                </p>
              ) : null}
            </FormSection>

            <FormSection title="Add details">
              <div className="grid gap-4 md:grid-cols-2">
                <div className="space-y-1.5">
                  <Label htmlFor={`${formId}-name`} className="text-ink">
                    Name <span className="text-destructive">*</span>
                  </Label>
                  <Input id={`${formId}-name`} name="name" required placeholder="Enter your name" />
                </div>
                <div className="space-y-1.5">
                  <Label htmlFor={`${formId}-org`}>Organisation</Label>
                  <Input id={`${formId}-org`} name="organisation" placeholder="Name of organisation" />
                </div>
                <div className="space-y-1.5">
                  <Label htmlFor={`${formId}-gender`}>Gender</Label>
                  <select id={`${formId}-gender`} name="gender" className={selectClass} defaultValue="">
                    <option value="">— Select —</option>
                    <option value="female">Female</option>
                    <option value="male">Male</option>
                    <option value="other">Other</option>
                    <option value="prefer-not">Prefer not to say</option>
                  </select>
                </div>
                <div className="space-y-1.5">
                  <Label htmlFor={`${formId}-qualification`}>Qualification</Label>
                  <textarea
                    id={`${formId}-qualification`}
                    name="qualification"
                    className={textareaClass}
                    placeholder="Enter qualifications"
                    rows={2}
                  />
                </div>
                <div className="space-y-1.5">
                  <Label htmlFor={`${formId}-country`}>
                    Country <span className="text-destructive">*</span>
                  </Label>
                  <select
                    id={`${formId}-country`}
                    name="country"
                    required
                    className={selectClass}
                    defaultValue=""
                  >
                    <option value="" disabled>
                      — Select —
                    </option>
                    <option value="IN">India</option>
                    <option value="OTHER">Other</option>
                  </select>
                </div>
                <div className="space-y-1.5">
                  <Label htmlFor={`${formId}-designation`}>Designation</Label>
                  <textarea
                    id={`${formId}-designation`}
                    name="designation"
                    className={textareaClass}
                    placeholder="Enter designation"
                    rows={2}
                  />
                </div>
                <div className="space-y-1.5 md:col-span-2">
                  <Label htmlFor={`${formId}-address`}>
                    Address <span className="text-destructive">*</span>
                  </Label>
                  <textarea
                    id={`${formId}-address`}
                    name="address"
                    required
                    className={textareaClass}
                    placeholder="Enter your address"
                    rows={3}
                  />
                </div>
                <div className="space-y-1.5 md:col-span-2">
                  <Label htmlFor={`${formId}-interests`}>Special interests</Label>
                  <textarea
                    id={`${formId}-interests`}
                    name="specialInterests"
                    className={textareaClass}
                    placeholder="Enter special interests"
                    rows={2}
                  />
                </div>
                <div className="space-y-1.5">
                  <Label htmlFor={`${formId}-dob`}>Date of birth</Label>
                  <Input id={`${formId}-dob`} name="dob" type="date" />
                </div>
              </div>
            </FormSection>

            <FormSection title="Add contact details">
              <div className="grid gap-4 md:grid-cols-2">
                <div className="space-y-1.5">
                  <Label htmlFor={`${formId}-mobile`}>
                    Mobile <span className="text-destructive">*</span>
                  </Label>
                  <Input
                    id={`${formId}-mobile`}
                    name="mobile"
                    type="tel"
                    required
                    placeholder="Mobile number"
                  />
                </div>
                <div className="space-y-1.5">
                  <Label htmlFor={`${formId}-email`}>
                    Email <span className="text-destructive">*</span>
                  </Label>
                  <Input id={`${formId}-email`} name="email" type="email" required placeholder="Email" />
                </div>
                <div className="space-y-1.5">
                  <Label htmlFor={`${formId}-mobile2`}>Mobile (optional)</Label>
                  <Input id={`${formId}-mobile2`} name="mobileAlt" type="tel" placeholder="Alternate mobile" />
                </div>
                <div className="space-y-1.5">
                  <Label htmlFor={`${formId}-website`}>Website</Label>
                  <Input id={`${formId}-website`} name="website" type="url" placeholder="https://…" />
                </div>
                <div className="space-y-1.5">
                  <Label htmlFor={`${formId}-facebook`}>Facebook link</Label>
                  <Input
                    id={`${formId}-facebook`}
                    name="facebook"
                    placeholder="Facebook profile or page URL"
                  />
                </div>
                <div className="space-y-1.5">
                  <Label htmlFor={`${formId}-youtube`}>YouTube link</Label>
                  <Input id={`${formId}-youtube`} name="youtube" placeholder="YouTube channel URL" />
                </div>
              </div>
            </FormSection>

            <FormSection title="Profile image">
              <Label htmlFor={`${formId}-photo`} className="text-ink">
                Upload a recent photograph
              </Label>
              <Input id={`${formId}-photo`} name="photo" type="file" accept="image/*" className="mt-2" />
            </FormSection>

            <FormSection title="Payment">
              {selectedRole ? (
                <p className="mb-4 rounded-lg border border-border bg-surface px-3 py-2 text-sm text-ink">
                  Amount due: <span className="font-semibold">{formatInr(selectedFee)}</span>
                  {selectedRole === 'annual' ? (
                    <span className="text-earth">
                      {' '}
                      (annual membership — 1st year; renewals{' '}
                      {formatInr(MEMBERSHIP_FEES_INR.annualRenewal)}/year thereafter)
                    </span>
                  ) : null}
                </p>
              ) : (
                <p className="mb-4 text-sm text-earth">
                  Select a membership type above to see the applicable fee.
                </p>
              )}

              <div className="space-y-1.5">
                <Label htmlFor={`${formId}-payment`} className="text-ink">
                  Payment method <span className="text-destructive">*</span>
                </Label>
                <select
                  id={`${formId}-payment`}
                  name="paymentMethod"
                  required
                  className={selectClass}
                  defaultValue=""
                >
                  <option value="" disabled>
                    — Select —
                  </option>
                  <option value="neft">NEFT / bank transfer</option>
                  <option value="upi">UPI</option>
                  <option value="cheque">Cheque / DD</option>
                </select>
                <p className="text-xs text-earth">
                  Pay the applicable fee to IMTA&apos;s bank account (see membership page) before or with
                  this application.
                </p>
              </div>
            </FormSection>

            <div className="flex items-start gap-3 rounded-xl border border-border bg-highlight/80 p-4">
              <input
                id={`${formId}-declare`}
                type="checkbox"
                checked={declaration}
                onChange={(e) => setDeclaration(e.target.checked)}
                className="mt-1 size-4 rounded border-border text-gold focus:ring-gold/40"
              />
              <Label
                htmlFor={`${formId}-declare`}
                className="cursor-pointer text-sm leading-relaxed text-earth"
              >
                I declare, with responsibility, that the contents are true to the best of my knowledge and
                belief. I understand that membership requires payment of the applicable fee and approval by
                the IMTA secretariat — submission alone does not make me a member.
              </Label>
            </div>

            <div className="flex flex-wrap gap-3 border-t border-border pt-6">
              <Button type="submit" className="gap-2" disabled={submitting}>
                {submitting ? (
                  <Loader2 className="size-4 animate-spin" />
                ) : (
                  <FilePenLine className="size-4" />
                )}
                {submitting ? 'Submitting…' : 'Submit application'}
              </Button>
              <DialogClose asChild>
                <Button type="button" variant="outline" disabled={submitting}>
                  Cancel
                </Button>
              </DialogClose>
            </div>
          </form>
        </div>
      </DialogContent>
    </Dialog>
  )
}
