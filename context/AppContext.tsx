import { onAuthStateChanged } from "firebase/auth";
import { createContext, ReactNode, useEffect, useState } from "react";
import { FirebaseAuth } from "../firebase";
import { useAppStore } from "../store/store";
import { IUser } from "@/store/slices/user";
import { useRouter } from "next/router";
import { FirebaseDb } from "../firebase";
import { doc, getDoc } from "firebase/firestore";
import OnbaordingUser from "@/components/modals/OnbaordingUser";

export const AuthContext = createContext({});

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [initialLoader, setInitialLoader] = useState<boolean>(true);
  const { setUser } = useAppStore();
  const router = useRouter();
  const [onboard, setOnboard] = useState(false);

  useEffect(
    () =>
      onAuthStateChanged(FirebaseAuth, async (user) => {
        if (user) {
          const userRef = doc(FirebaseDb, "users", user.uid);
          const userSnap = await getDoc(userRef);
          if (userSnap.exists() && typeof userSnap.data().regNo === "string") {
            setUser(userSnap.data() as IUser);
          } else {
            setOnboard(true);
          }
        } else {
          setUser(null);
        }
        setInitialLoader(false);
      }),
    [router, setUser]
  );

  return (
    <AuthContext.Provider value={{}}>
      {onboard ? (
        <OnbaordingUser />
      ) : initialLoader ? (
        <main className="w-full min-h-screen flex items-center justify-center flex-col">
          <div className="img"></div>
          <p>Loading...</p>
        </main>
      ) : (
        children
      )}
    </AuthContext.Provider>
  );
};
