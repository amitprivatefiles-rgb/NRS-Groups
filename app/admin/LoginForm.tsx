"use client";

import { useActionState } from "react";
import { login } from "./actions";

export default function LoginForm() {
  const [error, action, pending] = useActionState(login, undefined);
  return (
    <form action={action} className="admin-login">
      <h1>NRS leads</h1>
      <label htmlFor="password">Admin password</label>
      <input id="password" name="password" type="password" required autoFocus autoComplete="current-password" />
      {error && <p className="field__error">{error}</p>}
      <button className="btn btn--gold btn--block" disabled={pending}>
        {pending ? "Checking…" : "Sign in"}
      </button>
    </form>
  );
}
