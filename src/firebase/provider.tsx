'use client';

import {
  createContext,
  useContext,
  type ReactNode,
  useMemo,
  memo,
} from 'react';
import type { FirebaseApp } from 'firebase/app';
import type { Auth } from 'firebase/auth';
import type { Firestore } from 'firebase/firestore';

import { initializeFirebase } from '.';

type FirebaseContextValue = {
  app: FirebaseApp | null;
  auth: Auth | null;
  firestore: Firestore | null;
};

const FirebaseContext = createContext<FirebaseContextValue | null>(null);

function FirebaseProviderComponent({ children }: { children: ReactNode }) {
  const firebase = useMemo(() => initializeFirebase(), []);

  return (
    <FirebaseContext.Provider value={firebase}>
      {children}
    </FirebaseContext.Provider>
  );
}

export const FirebaseProvider = memo(FirebaseProviderComponent);

export function useFirebase() {
  const context = useContext(FirebaseContext);
  if (context === undefined) {
    throw new Error('useFirebase must be used within a FirebaseProvider');
  }
  return context;
}

export function useFirebaseApp() {
  return useFirebase()?.app;
}

export function useAuth() {
  return useFirebase()?.auth;
}

export function useFirestore() {
  return useFirebase()?.firestore;
}
