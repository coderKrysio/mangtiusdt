# Mangtiusdt

### Setting up the project locally

---

To set up the project locally follow the given steps

1. Fork this repo
2. Go to the terminal create a new directory and clone the project in your local using the below command

```
git clone
```

4. Change the directory to the project directory

```
cd mangtiusdt
```

5. Install the dependencies

```
pnpm install
```

6. Set up environment variables. Create a Kinde Auth project, go to project settings and add your KINDE_CLIENT_ID, KINDE_CLIENT_SECRET and KINDE_ISSUER_URL in .env.example

```
cp .env.example .env.local
```

7. Run the project using the command

```
pnpm run dev
```

Go to [localhost:3000](http://localhost:3000/) where the project will be running!
