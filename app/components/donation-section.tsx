"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { Card, Section } from "./site";

const ORGANIZATION_SLUG = "dmv-river-intelligence-network";
const GOAL_CENTS = 100_000;
const PRESET_AMOUNTS = ["10", "25", "50"];

type OrganizationResponse = {
  balances?: {
    balance_cents?: number;
  };
};

export default function DonationSection() {
  const [balanceCents, setBalanceCents] = useState<number | null>(null);
  const [balanceError, setBalanceError] = useState(false);
  const [amount, setAmount] = useState("25");
  const [isMonthly, setIsMonthly] = useState(false);
  const [amountError, setAmountError] = useState("");

  useEffect(() => {
    const controller = new AbortController();

    async function loadBalance() {
      try {
        const response = await fetch(
          `https://hcb.hackclub.com/api/v3/organizations/${ORGANIZATION_SLUG}`,
          { signal: controller.signal },
        );
        if (!response.ok) {
          throw new Error(`HCB returned ${response.status}`);
        }

        const data = (await response.json()) as OrganizationResponse;
        const currentBalance = data.balances?.balance_cents;
        if (
          typeof currentBalance !== "number" ||
          !Number.isFinite(currentBalance)
        ) {
          throw new Error("HCB response did not include a valid balance");
        }

        setBalanceCents(currentBalance);
      } catch (error) {
        if (controller.signal.aborted) return;
        console.error("Unable to load HCB balance:", error);
        setBalanceError(true);
      }
    }

    void loadBalance();
    return () => controller.abort();
  }, []);

  const progress =
    balanceCents === null
      ? 0
      : Math.min(Math.max((balanceCents / GOAL_CENTS) * 100, 0), 100);

  function continueToDonation() {
    const dollars = Number(amount);
    if (!Number.isFinite(dollars) || dollars < 1) {
      setAmountError("Enter a donation amount of at least $1.");
      return;
    }

    setAmountError("");
    const donationUrl = new URL(
      `https://hcb.hackclub.com/donations/start/${ORGANIZATION_SLUG}`,
    );
    donationUrl.searchParams.set("amount", String(Math.round(dollars * 100)));
    if (isMonthly) {
      donationUrl.searchParams.set("monthly", "true");
    }

    window.location.assign(donationUrl.toString());
  }

  return (
    <Section id="donate" className="donation-section">
      <div className="donation-layout">
        <div className="donation-copy">
          <h2>Support Our Work</h2>
          <p>
            Your donation supports student-led river monitoring, clear public
            dashboards, and educational programs across the DMV.
          </p>
          <Image
            alt="Students working together to support river monitoring"
            className="donations-candid-image"
            height={425}
            src="/donations_candid_img.png"
            width={661}
          />
        </div>

        <Card className="donation-card">
          <h3>Live Donation Data</h3>
          <div className="donation-balance">
            <div className="donation-balance-row">
              <span>Current HCB balance</span>
              <strong aria-live="polite">
                {balanceCents !== null
                  ? (balanceCents / 100).toLocaleString("en-US", {
                      style: "currency",
                      currency: "USD",
                      maximumFractionDigits: 0,
                    })
                  : balanceError
                    ? "Unavailable"
                    : "Loading…"}
              </strong>
            </div>
            <div className="donation-goal-row">
              <span>Progress toward our goal</span>
              <span>$1,000</span>
            </div>
            <div
              className="donation-progress-track"
              role="progressbar"
              aria-label="Progress toward $1,000 fundraising goal"
              aria-valuemin={0}
              aria-valuemax={100}
              aria-valuenow={Math.round(progress)}
            >
              <div
                className="donation-progress-fill"
                style={{ width: `${progress}%` }}
              />
            </div>
          </div>

          <div className="donation-form">
            <label className="donation-label" htmlFor="donation-amount">
              Choose an amount (USD)
            </label>
            <div className="donation-presets" aria-label="Suggested amounts">
              {PRESET_AMOUNTS.map((preset) => (
                <button
                  aria-pressed={amount === preset}
                  className={`donation-preset${amount === preset ? " active" : ""}`}
                  key={preset}
                  onClick={() => {
                    setAmount(preset);
                    setAmountError("");
                  }}
                  type="button"
                >
                  ${preset}
                </button>
              ))}
            </div>
            <input
              aria-describedby={
                amountError ? "donation-amount-error" : undefined
              }
              id="donation-amount"
              min="1"
              onChange={(event) => {
                setAmount(event.target.value);
                setAmountError("");
              }}
              placeholder="Or enter a custom amount"
              step="0.01"
              type="number"
              value={amount}
            />
            {amountError && (
              <p
                className="donation-error"
                id="donation-amount-error"
                role="alert"
              >
                {amountError}
              </p>
            )}
            <label className="donation-monthly">
              <input
                checked={isMonthly}
                onChange={(event) => setIsMonthly(event.target.checked)}
                type="checkbox"
              />
              <span>Make this a monthly recurring donation</span>
            </label>
            <button
              className="donation-submit"
              onClick={continueToDonation}
              type="button"
            >
              Continue to Hack Club Bank
            </button>
          </div>
        </Card>
      </div>
    </Section>
  );
}
