'use client'

import { ElDialog, ElDialogPanel } from '@tailwindplus/elements/react'
import { useState } from 'react'
import { Button } from '../elements/button'
import { Subheading } from '../elements/subheading'

type CollaborationPath = 'design_partner' | 'strategic_advisor' | 'capital_partner' | ''

export function PartnershipInquiryModal({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    role: '',
    collaborationPath: '' as CollaborationPath,
    message: '',
  })
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // TODO: Implement actual form submission logic
    setIsSubmitted(true)

    // Reset form after 3 seconds
    setTimeout(() => {
      setIsSubmitted(false)
      onClose()
      setFormData({
        name: '',
        email: '',
        company: '',
        role: '',
        collaborationPath: '',
        message: '',
      })
    }, 3000)
  }

  const getMessagePlaceholder = () => {
    if (formData.collaborationPath === 'capital_partner') {
      return 'Please describe your investment profile (Angel, VC, or Industry).'
    }
    return 'How can we best work together?'
  }

  return (
    <>
      {isOpen && (
        <dialog
          id="partnership-modal"
          className="fixed inset-0 z-50 flex items-center justify-center bg-olive-950/50 backdrop:bg-transparent dark:bg-black/50"
          open
        >
          <div className="relative w-full max-w-2xl rounded-2xl border border-olive-950/10 bg-olive-100 p-8 shadow-2xl dark:border-white/10 dark:bg-olive-950">
            {/* Close Button */}
            <button
              onClick={onClose}
              aria-label="Close modal"
              className="absolute right-4 top-4 inline-flex rounded-full p-1.5 text-olive-950 hover:bg-olive-950/10 cursor-pointer dark:text-white dark:hover:bg-white/10"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="size-6"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
              </svg>
            </button>

            {!isSubmitted ? (
              <>
                {/* Header */}
                <div className="mb-8">
                  <Subheading>Partnership Application</Subheading>
                  <p className="mt-2 text-base/7 text-olive-700 dark:text-olive-400">
                    Join the founding cohort shaping the future of UK food compliance.
                  </p>
                </div>

                {/* Form */}
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Name & Email */}
                  <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                    <div>
                      <label htmlFor="name" className="mb-2 block text-sm font-medium text-olive-950 dark:text-white">
                        Full Name
                      </label>
                      <input
                        type="text"
                        id="name"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full rounded-lg border border-olive-950/20 bg-white px-4 py-2.5 text-olive-950 placeholder-olive-600 focus:border-olive-600 focus:outline-none focus:ring-2 focus:ring-olive-600/20 dark:border-white/20 dark:bg-olive-900 dark:text-white dark:placeholder-olive-400 dark:focus:border-olive-400 dark:focus:ring-olive-400/20"
                        placeholder="John Smith"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="mb-2 block text-sm font-medium text-olive-950 dark:text-white">
                        Business Email
                      </label>
                      <input
                        type="email"
                        id="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full rounded-lg border border-olive-950/20 bg-white px-4 py-2.5 text-olive-950 placeholder-olive-600 focus:border-olive-600 focus:outline-none focus:ring-2 focus:ring-olive-600/20 dark:border-white/20 dark:bg-olive-900 dark:text-white dark:placeholder-olive-400 dark:focus:border-olive-400 dark:focus:ring-olive-400/20"
                        placeholder="john@company.co.uk"
                      />
                    </div>
                  </div>

                  {/* Company Name & Role */}
                  <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                    <div>
                      <label
                        htmlFor="company"
                        className="mb-2 block text-sm font-medium text-olive-950 dark:text-white"
                      >
                        Company Name
                      </label>
                      <input
                        type="text"
                        id="company"
                        required
                        value={formData.company}
                        onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                        className="w-full rounded-lg border border-olive-950/20 bg-white px-4 py-2.5 text-olive-950 placeholder-olive-600 focus:border-olive-600 focus:outline-none focus:ring-2 focus:ring-olive-600/20 dark:border-white/20 dark:bg-olive-900 dark:text-white dark:placeholder-olive-400 dark:focus:border-olive-400 dark:focus:ring-olive-400/20"
                        placeholder="Acme Foods Ltd"
                      />
                    </div>
                    <div>
                      <label htmlFor="role" className="mb-2 block text-sm font-medium text-olive-950 dark:text-white">
                        Your Role
                      </label>
                      <input
                        type="text"
                        id="role"
                        required
                        value={formData.role}
                        onChange={(e) => setFormData({ ...formData, role: e.target.value })}
                        className="w-full rounded-lg border border-olive-950/20 bg-white px-4 py-2.5 text-olive-950 placeholder-olive-600 focus:border-olive-600 focus:outline-none focus:ring-2 focus:ring-olive-600/20 dark:border-white/20 dark:bg-olive-900 dark:text-white dark:placeholder-olive-400 dark:focus:border-olive-400 dark:focus:ring-olive-400/20"
                        placeholder="Managing Director"
                      />
                    </div>
                  </div>

                  {/* Collaboration Path */}
                  <div>
                    <label
                      htmlFor="collaborationPath"
                      className="mb-2 block text-sm font-medium text-olive-950 dark:text-white"
                    >
                      Collaboration Path
                    </label>
                    <select
                      id="collaborationPath"
                      required
                      value={formData.collaborationPath}
                      onChange={(e) =>
                        setFormData({ ...formData, collaborationPath: e.target.value as CollaborationPath })
                      }
                      className="w-full rounded-lg border border-olive-950/20 bg-white px-4 py-2.5 text-olive-950 focus:border-olive-600 focus:outline-none focus:ring-2 focus:ring-olive-600/20 dark:border-white/20 dark:bg-olive-900 dark:text-white dark:focus:border-olive-400 dark:focus:ring-olive-400/20"
                    >
                      <option value="">Select your interest...</option>
                      <option value="design_partner">Design Partner (Food SME seeking early access/feedback)</option>
                      <option value="strategic_advisor">
                        Strategic Advisor (ESG Consultant/Auditor looking to collaborate)
                      </option>
                      <option value="capital_partner">Capital Partner (Investor interested in the Pre-Seed round)</option>
                    </select>
                  </div>

                  {/* Message */}
                  <div>
                    <label htmlFor="message" className="mb-2 block text-sm font-medium text-olive-950 dark:text-white">
                      Message
                    </label>
                    <textarea
                      id="message"
                      required
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder={getMessagePlaceholder()}
                      className="w-full rounded-lg border border-olive-950/20 bg-white px-4 py-2.5 text-olive-950 placeholder-olive-600 focus:border-olive-600 focus:outline-none focus:ring-2 focus:ring-olive-600/20 dark:border-white/20 dark:bg-olive-900 dark:text-white dark:placeholder-olive-400 dark:focus:border-olive-400 dark:focus:ring-olive-400/20"
                    />
                  </div>

                  {/* Submit Button */}
                  <div className="flex justify-end gap-4">
                    <Button type="button" color="light" onClick={onClose}>
                      Cancel
                    </Button>
                    <Button type="submit" size="lg">
                      Submit Application
                    </Button>
                  </div>
                </form>
              </>
            ) : (
              /* Success State */
              <div className="py-12 text-center">
                <div className="mb-6 flex justify-center">
                  <div className="flex size-16 items-center justify-center rounded-full bg-olive-600/10 dark:bg-olive-400/10">
                    <svg
                      className="h-8 w-8 text-olive-600 dark:text-olive-400"
                      fill="none"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path d="M5 13l4 4L19 7"></path>
                    </svg>
                  </div>
                </div>
                <Subheading className="mb-4">Application Received</Subheading>
                <p className="text-base/7 text-olive-700 dark:text-olive-400">
                  Our founding team reviews every inquiry manually.
                  <br />
                  Expect a response within 48 hours.
                </p>
              </div>
            )}
          </div>
        </dialog>
      )}
    </>
  )
}
