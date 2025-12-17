// SignInPage.jsx
import { SignIn } from "@clerk/clerk-react";

export default function SignInPage() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-purple-600 via-pink-500 to-red-400 p-30">
   
        <SignIn
          path="/sign-in"
          routing="path"
          signUpUrl="/sign-up"
          
          localization={{
            signIn: {
              start: {
                title: "Welcome Back 👋",
                subtitle: "Sign in to ImageCompressor",
              },
            },
          }}
          appearance={{
            layout: {
      showOptionalFields: true,
      showHeader: true,       
      showSocialButtons: true,
    },
            elements: {
              card:
                "w-[450] h-[550px] bg-purple-400 text-white rounded-3xl shadow-2xl p-10",
              headerTitle: "text-4xl font-bold mb-3 text-white",
              headerSubtitle: "text-md text-purple-100 mb-6",
              formButtonPrimary:
                "bg-white text-purple-700 font-semibold py-3 rounded-lg hover:bg-purple-100 transition py-6 px-6",
              formFieldInput:
                "rounded-lg border-gray-300 focus:border-purple-400 focus:ring-purple-400 text-gray-900 py-6 px-6",
            },
            variables: {
              colorPrimary: "#9333ea",
               colorBackground: "#c084fc",
              borderRadius: "1rem",
            },
          }}
        />
        </div>
    

    
  );
}




