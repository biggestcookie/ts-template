function main(): void {
  const startTime = performance.now();

  // Implement

  console.log(
    `Completed in ${((performance.now() - startTime) * 1e-3).toFixed(
      4
    )} seconds.`
  );
}

main();
